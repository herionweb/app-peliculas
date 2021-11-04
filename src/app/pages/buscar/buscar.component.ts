import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css'],
})
export class BuscarComponent implements OnInit {
  peliculas: Movie[] = [];
  texto: string = '';

  constructor(
    private route: ActivatedRoute,
    private _peliculasService: PeliculasService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((textoInput) => {
      this.texto = textoInput.texto;
      // console.log(this.texto);
      this._peliculasService
        .buscarPelicula(textoInput.texto)
        .subscribe((peliculaEncontrada) => {
          this.peliculas = peliculaEncontrada;
        });
    });
  }
}
