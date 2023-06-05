import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { alumno } from 'src/app/alumnos/alumnos.component';
import { AlumnosServiciosService } from 'src/app/core/servicios/alumnos-servicios.service';
import { CursosServiciosService } from 'src/app/core/servicios/cursos-servicios.service';
import { Cursos, cursosWithSubject } from 'src/app/cursos/models';
import { InscripcionesActions } from '../../store/inscripciones.actions';
import { CreateInscripcionData } from '../../models';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-inscripciones-dialog',
  templateUrl: './inscripciones-dialog.component.html',
  styleUrls: ['./inscripciones-dialog.component.scss']
})
export class InscripcionesDialogComponent  implements OnInit{
  alumnos: alumno [] = [];
  cursos: cursosWithSubject[]= [];
  selectedCourseControl = new FormControl <Cursos |null> (null);

  studentIdControl = new  FormControl<number | null> (null, [Validators.required]);
  courseIdControl = new  FormControl <number | null>(null, [Validators.required]);
  subjectIdControl = new  FormControl<number | null> (null, [Validators.required]);
  
  
  inscripcionForm= new FormGroup({
    studentId: this.studentIdControl,
    courseId: this.courseIdControl,
    subjectId: this.subjectIdControl,
  
    })
    
    destroyed$ = new Subject<void>();
  
    constructor (private alumnosService: AlumnosServiciosService,
                private cursosService: CursosServiciosService,
                private dialogRef: DialogRef<InscripcionesDialogComponent>,
                private store: Store){
                  this.selectedCourseControl.valueChanges.pipe(
                    takeUntil(this.destroyed$)
                    ).subscribe(
                    {
                      next: (curso) =>{
                        if (curso){
                          this.subjectIdControl.setValue (curso.subjectId);
                          this.courseIdControl.setValue (curso.id);
                        }
                      }
                    }
                  );
                }
              
  ngOnDestroy(): void {
     this.destroyed$.next ();
     this.destroyed$.complete ();
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
  onSave (): void{
    this.store.dispatch (InscripcionesActions.createInscripcion ({
      data: this.inscripcionForm.value as CreateInscripcionData,
    }));
    this.dialogRef.close();
  }
}
