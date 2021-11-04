import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';
import { RatingModule } from 'ng-starrating';
import { PipesModule } from '../pipes/pipes.module';
import { CreditosSlideShowComponent } from './creditos-slide-show/creditos-slide-show.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SlideshowComponent,
    PeliculasPosterGridComponent,
    CreditosSlideShowComponent,
  ],
  imports: [CommonModule, RouterModule, RatingModule, PipesModule],
  exports: [
    NavbarComponent,
    SlideshowComponent,
    PeliculasPosterGridComponent,
    RatingModule,
    PipesModule,
    CreditosSlideShowComponent,
  ],
})
export class ComponentsModule {}
