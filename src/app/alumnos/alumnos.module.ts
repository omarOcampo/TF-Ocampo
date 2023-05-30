import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosComponent } from './alumnos.component';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AbmAlumnosComponent } from './abm-alumnos/abm-alumnos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { PipesModule } from '../shared/pipes/pipes.module';
import { DirectivasModule } from '../shared/directivas/directivas.module';
import { AlumnoDetalleComponent } from './pages/alumno-detalle/alumno-detalle.component';




@NgModule({
  declarations: [
    AlumnosComponent,
    AbmAlumnosComponent,
    AlumnoDetalleComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    PipesModule,
    DirectivasModule,
    
   
  ],
  exports: [
    AlumnosComponent,
  ]
})
export class AlumnosModule { }
