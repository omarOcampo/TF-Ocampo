import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { alumno } from 'src/app/alumnos/alumnos.component';
import { AlumnosServiciosService } from 'src/app/core/servicios/alumnos-servicios.service';
import { CursosServiciosService } from 'src/app/core/servicios/cursos-servicios.service';
import { cursosWithSubject } from 'src/app/cursos/models';

@Component({
  selector: 'app-inscripciones-dialog',
  templateUrl: './inscripciones-dialog.component.html',
  styleUrls: ['./inscripciones-dialog.component.scss']
})
export class InscripcionesDialogComponent  implements OnInit{
  alumnos: alumno [] = [];
  cursos: cursosWithSubject[]= [];

  studentIdControl = new  FormControl (null, [Validators.required]);
  courseIdControl = new  FormControl (null, [Validators.required]);
  subjectIdControl = new  FormControl (null, [Validators.required]);
  
  
  inscripcionForm= new FormGroup({
    studentId: this.studentIdControl,
    courseId: this.courseIdControl,
    subjectId: this.subjectIdControl,
  
    })
 
  constructor (private alumnosService: AlumnosServiciosService,
                private cursosService: CursosServiciosService){
    this.inscripcionForm.valueChanges.subscribe(console.log);

  }
  ngOnInit(): void {
  this.alumnosService.getObtenerAlumno()
  .subscribe ({
    next: (res) => {
      this.alumnos =res;
    }
  })

  this.cursosService.obtenerCursosWithSubject()
  .subscribe ({
    next: (res) => {
      this.cursos = res;
    }
  })
  }
}
