import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cartelera, Movie } from '../interfaces/cartelera-response';
import { tap, map, catchError } from 'rxjs/operators';
import { PeliculaDetails } from '../interfaces/pelicula-details';
import { PeliculaCredits } from '../interfaces/pelicula-credits';

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'https://api.themoviedb.org/3';
  private carteleraPage = 1;
  cargando: boolean = false;

  get params() {
    return {
      api_key: '80b6a4ee9792783845e0472eb3ad93a4',
      language: 'es-ES',
      page: this.carteleraPage.toString(),
    };
  }

  getPeliculas(): Observable<Cartelera> {
    if (this.cargando) {
      return;
    }

    this.cargando = true;
    return this.http
      .get<Cartelera>(` ${this.baseUrl}/movie/now_playing`, {
        params: this.params,
      })
      .pipe(
        tap(() => {
          this.carteleraPage += 1;
          this.cargando = false;
        })
      );
  }

  buscarPelicula(texto: string): Observable<Movie[]> {
    const params = { ...this.params, page: '1', query: texto };

    return this.http
      .get<Cartelera>(` ${this.baseUrl}/search/movie`, { params })
      .pipe(
        map((peliculasEncontradas: Cartelera) => peliculasEncontradas.results)
      );
  }

  resetCartelera() {
    this.carteleraPage = 1;
  }

  getPelicula(id: string) {
    return this.http
      .get<PeliculaDetails>(`${this.baseUrl}/movie/${id}`, {
        params: this.params,
      })
      .pipe(catchError((err) => of([])));
  }

  getCreditos(id: string) {
    return this.http
      .get<PeliculaCredits>(`${this.baseUrl}/movie/${id}/credits`, {
        params: this.params,
      })
      .pipe(
        map((resp) => {
          return resp.cast;
        }),
        catchError((err) => of(null))
      );
  }
}
