import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursosServiciosService } from 'src/app/core/servicios/cursos-servicios.service';
import { Cursos } from '../../models';


@Component({
  selector: 'app-curso-detalles',
  templateUrl: './curso-detalles.component.html',
  styleUrls: ['./curso-detalles.component.scss']
})
export class CursoDetallesComponent {
   curso: Cursos | undefined
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private cursosService: CursosServiciosService
  ){
    this.cursosService.obtenerCursoPorId(parseInt(this.activatedRoute.snapshot.params['id'])).subscribe((curso)=> this.curso = curso);
  }

}
