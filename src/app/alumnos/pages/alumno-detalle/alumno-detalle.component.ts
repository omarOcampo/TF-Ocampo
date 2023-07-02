import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { alumno } from '../../alumnos.component';
import { AlumnosServiciosService } from 'src/app/core/servicios/alumnos-servicios.service';


@Component({
  selector: 'app-alumno-detalle',
  templateUrl: './alumno-detalle.component.html',
  styleUrls: ['./alumno-detalle.component.scss']
})
export class AlumnoDetalleComponent {

  alumno: alumno | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private alumnosService: AlumnosServiciosService
  ){
    console.log(this.activatedRoute.snapshot.params);
    this.alumnosService.obtenerAlumnoPorId(parseInt(this.activatedRoute.snapshot.params['id'])).subscribe((alumno)=> this.alumno = alumno);
  }

}
