import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  peliculas: Movie[] = [];
  peliculasSlide: Movie[] = [];

  //=============SCROLL INFINITO=======================
  @HostListener('window:scroll', ['$event'])
  onscroll() {
    const pos =
      (document.documentElement.scrollTop || document.body.scrollTop) + 1600;
    const max =
      document.documentElement.scrollHeight || document.body.scrollHeight;
    // console.log({ pos, max });

    if (pos > max) {
      if (this._peliculasService.cargando) {
        return;
      } else {
        this._peliculasService.getPeliculas().subscribe((peliculas) => {
          this.peliculas.push(...peliculas.results);
        });
      }
    }
  }
  //===================================================

  constructor(private _peliculasService: PeliculasService) {}

  ngOnInit(): void {
    this._peliculasService.getPeliculas().subscribe((peliculas) => {
      this.peliculas = peliculas.results;
      this.peliculasSlide = peliculas.results;
    });
  }

  ngOnDestroy() {
    this._peliculasService.resetCartelera();
  }
}
