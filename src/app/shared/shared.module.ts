import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivasModule } from './directivas/directivas.module';
import { PipesModule } from './pipes/pipes.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DirectivasModule,
    PipesModule,
  ]
})
export class SharedModule { }
