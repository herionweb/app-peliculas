import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImagen',
})
export class NoImagenPipe implements PipeTransform {
  transform(imagen: string): string {
    const url = 'https://image.tmdb.org/t/p/w500';

    if (imagen) {
      return url + imagen;
    } else {
      return './assets/no-image.jpg';
    }
  }
}
