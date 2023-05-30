import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { AbmCursosComponent } from './abm-cursos/abm-cursos.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../shared/pipes/pipes.module';
import { MatInputModule } from '@angular/material/input';
import {  MatDialogModule } from '@angular/material/dialog';
import { CursoDetallesComponent } from './pages/curso-detalles/curso-detalles.component';




@NgModule({
  declarations: [
    CursosComponent,
    AbmCursosComponent,
    CursoDetallesComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    MatButtonModule,
    ReactiveFormsModule,
    PipesModule,
    MatInputModule,
    MatDialogModule,
   
  ]
})
export class CursosModule { }
