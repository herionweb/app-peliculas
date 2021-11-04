import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoImagenPipe } from './no-imagen.pipe';

@NgModule({
  declarations: [NoImagenPipe],
  imports: [CommonModule],
  exports: [NoImagenPipe],
})
export class PipesModule {}
