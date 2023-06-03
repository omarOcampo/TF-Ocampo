import { Component, OnInit } from '@angular/core';
import { InscripcionesServicesService } from './servicios/inscripciones-services.service';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.scss']
})
export class InscripcionesComponent implements OnInit {
    constructor (private inscripcionesService: InscripcionesServicesService) {}
    ngOnInit(): void {
      this.inscripcionesService.getAllInscriptions().subscribe(console.log);

}
}
