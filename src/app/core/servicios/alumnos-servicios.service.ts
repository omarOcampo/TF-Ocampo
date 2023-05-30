import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';
import { alumno } from '../../alumnos/alumnos.component';

@Injectable({
  providedIn: 'root'
})
export class AlumnosServiciosService {
   
   private alumnos$ = new BehaviorSubject([
    {
    id: 1,
    nombre: 'Omar',
    apellido:'Ocampo',
    curso: 4 , 
    carrera:'Chef internacional',
    },
    
    {
    id:2,
    nombre: 'Paola',
    apellido:'Perez',
    curso: 4 , 
    carrera:'Chef internacional',
    },
    {
    id: 3,
    nombre: 'Leo',
    apellido:'Mendez',
    curso: 3 , 
    carrera:'Pasteleria profesional',
    },
  ]);

  constructor() { }

  get obtenerAlumno(): Observable<alumno[]> {
    return this.alumnos$.asObservable();
  }

}
