import { Component, OnInit, Input } from '@angular/core';
import { CastMovie } from 'src/app/interfaces/pelicula-credits';
import Swiper from 'swiper';

@Component({
  selector: 'app-creditos-slide-show',
  templateUrl: './creditos-slide-show.component.html',
  styleUrls: ['./creditos-slide-show.component.css'],
})
export class CreditosSlideShowComponent implements OnInit {
  @Input() peliculaCredits: CastMovie[] = [];

  swiper: Swiper;

  constructor() {}

  ngOnInit(): void {
    // console.log(this.peliculaCredits);
  }

  ngAfterViewInit(): void {
    this.swiper = new Swiper('.swiper-container', {
      slidesPerView: 5.3,
      freeMode: true,
      spaceBetween: 15,
    });
  }

  onclickNext() {
    this.swiper.slideNext();
  }
  onclickBack() {
    this.swiper.slidePrev();
  }
}
