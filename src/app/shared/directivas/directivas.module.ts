import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CambiosDirective } from './cambios.directive';



@NgModule({
  declarations: [
    CambiosDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CambiosDirective
  ]
})
export class DirectivasModule { }
