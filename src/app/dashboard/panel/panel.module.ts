import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AlumnosModule } from '../../alumnos/alumnos.module';
import { DirectivasModule } from '../../shared/directivas/directivas.module';
import { AlumnosComponent } from '../../alumnos/alumnos.component';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { CursosComponent } from 'src/app/cursos/cursos.component';
import { AlumnoDetalleComponent } from 'src/app/alumnos/pages/alumno-detalle/alumno-detalle.component';
import { CursoDetallesComponent } from 'src/app/cursos/pages/curso-detalles/curso-detalles.component';
import { InscripcionesComponent } from 'src/app/inscripciones/inscripciones.component';
import { LoginModule } from 'src/app/login/login.module';
import { LoginServicioService } from 'src/app/login/servicio/login-servicio.service';
import { AdminGuardGuard } from 'src/app/login/guard/admin-guard.guard';




MatSidenavModule
@NgModule({
  declarations: [
  PanelComponent,
  
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule, 
    AlumnosModule,
    DirectivasModule,
    MatListModule,
    RouterModule.forChild([
      {
        path: 'alumnos',
        children: [{
          path: '',
          component:AlumnosComponent,
        },
      {
        path: ':id',
        component: AlumnoDetalleComponent, 
      }    
    ]
      },
      {
        path: 'cursos',
        canActivate: [AdminGuardGuard],
        children: [{
          path:'',
          component: CursosComponent
        },
      {
        path: ':id',
        component: CursoDetallesComponent,
      }]
      },
      {
        path:'inscripciones',
        children: [{
          path:'',
          component: InscripcionesComponent,
        }]
      }
    ])
    
  ],
  exports: [
    PanelComponent,
    AlumnosComponent
  ]
})
export class PanelModule { 
  
}
