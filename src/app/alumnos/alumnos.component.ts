import { Component } from '@angular/core';
import { AbmAlumnosComponent } from './abm-alumnos/abm-alumnos.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AlumnosServiciosService } from '../core/servicios/alumnos-servicios.service';
import { Observable } from 'rxjs';
import { TimeService} from '../core/servicios/time.service';
import { Router } from '@angular/router';


export interface alumno{
  id: number;
  nombre: string;
  apellido: string;
  fechaRegistro: Date;
}



@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent {

    hora$: Observable<string>;


    dataSource = new MatTableDataSource<alumno>();

    displayedColumns: string[] = ['id','nombreCompleto','fechaRegistro','editar' ,'eliminar', 'ver_detalle'];


constructor (private matDialog: MatDialog,
             private alumnosService: AlumnosServiciosService,
             private timeServicio: TimeService,
             private router: Router)
             {
               this.alumnosService.getObtenerAlumno()
               .subscribe((alumno) => {this.dataSource.data= alumno;
               })
              this.hora$ = this.timeServicio.reloj;
             };
 
 crearAlumnos(): void{
   const dialog = this.matDialog.open(AbmAlumnosComponent)

   dialog.afterClosed().subscribe((valor) =>{
    if(valor){
      this.dataSource.data = [...this.dataSource.data,
      {
        ...valor, 
        id: this.dataSource.data.length+1,
      }
      ];
    }
   })
 }

 eliminarAlumno (alumnoAEliminar: alumno): void {
  this.dataSource.data = this.dataSource.data.filter (
    (alumnoAct) => alumnoAct.id !== alumnoAEliminar.id,
  )
 }

  editarAlumno(alumnoParaEditar: alumno) : void {
    const dialog = this.matDialog.open(AbmAlumnosComponent, {
      data: { alumnoParaEditar}
    });
    dialog.afterClosed().subscribe((dataDelalumnoEditado) => {
      if(dataDelalumnoEditado){
        this.dataSource.data = this.dataSource.data.map(
          (alumnoActual) => alumnoActual.id === alumnoParaEditar.id?
          ({...alumnoActual, ...dataDelalumnoEditado}): alumnoActual,

        );
      }
    })
  }

  irAlDetalle(alumnoId: number):void {
    this.router.navigate(['dashboard','alumnos', alumnoId])
  }
}
