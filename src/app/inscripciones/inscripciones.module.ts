import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { InscripcionesComponent } from '../inscripciones/inscripciones.component';
import { IncripcionesRoutingModule } from './incripciones-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { InscripcionesEffects } from './store/inscripciones.effects';
import { StoreModule } from '@ngrx/store';
import { inscripcionesFeature } from './store/inscripciones.reducer';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { InscripcionesDialogComponent } from './component/inscripciones-dialog/inscripciones-dialog.component';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InscripcionesComponent,
    InscripcionesDialogComponent
  ],
  imports: [
    CommonModule,
    IncripcionesRoutingModule,
    EffectsModule.forFeature([InscripcionesEffects]),
    StoreModule.forFeature(inscripcionesFeature),
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule    
    
  ]
})
export class InscripcionesModule { }
