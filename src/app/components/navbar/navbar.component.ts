import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  texto: string;

  constructor(
    private _peliculasService: PeliculasService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  buscar(texto: string) {
    // console.log(texto);

    texto = texto.trim();

    if (texto.length === 0) {
      return;
    }

    this.router.navigate(['buscar', texto]);
  }
}
