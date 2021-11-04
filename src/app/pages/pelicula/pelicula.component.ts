import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Routes } from '@angular/router';
import {
  PeliculaCredits,
  CastMovie,
} from 'src/app/interfaces/pelicula-credits';
import { PeliculaDetails } from 'src/app/interfaces/pelicula-details';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css'],
})
export class PeliculaComponent implements OnInit {
  peliculaDetails: PeliculaDetails;
  peliculaCredits: CastMovie[];

  constructor(
    private _peliculasService: PeliculasService,
    private route: ActivatedRoute,
    private local: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this._peliculasService
        .getPelicula(param.id)
        .subscribe((peliculaData: PeliculaDetails) => {
          if (!peliculaData) {
            this.router.navigate(['/home']);
            return;
          }
          this.peliculaDetails = peliculaData;
        });
      this._peliculasService
        .getCreditos(param.id)
        .subscribe((creditos: CastMovie[]) => {
          if (creditos === null) {
            this.router.navigate(['/home']);
            return;
          }
          this.peliculaCredits = creditos.filter((actores) => {
            const actor = actores.profile_path;
            if (actor !== null) {
              return actor;
            }
          });

          // console.log(this.peliculaCredits);
        });
    });
  }

  back() {
    this.local.back();
  }
}
