import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Cartelera, Movie } from 'src/app/interfaces/cartelera-response';
import Swiper from 'swiper/bundle';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css'],
})
export class SlideshowComponent implements OnInit, AfterViewInit {
  @Input() peliculas: Movie[];
  swiper: Swiper;
  constructor() {}

  ngOnInit(): void {
    // console.log(this.peliculas);
  }

  ngAfterViewInit(): void {
    this.swiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
    });
  }

  onclickNext() {
    this.swiper.slideNext();
  }
  onclickBack() {
    this.swiper.slidePrev();
  }
}
