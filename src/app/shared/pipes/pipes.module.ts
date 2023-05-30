import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErroresSmsPipe } from './errores-sms.pipe';
import { NombreCompletoPipe } from './nombre-completo.pipe';




@NgModule({
  declarations: [
    ErroresSmsPipe,
    NombreCompletoPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ErroresSmsPipe,
    NombreCompletoPipe,
  ]
})
export class PipesModule { }
