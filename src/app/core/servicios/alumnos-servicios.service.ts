import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map, mergeMap, tap } from 'rxjs';
import { alumno } from '../../alumnos/alumnos.component';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

const alumno_mocks: alumno [] = [
  {
    id: 1,
    nombre: 'Omar',
    apellido:'Ocampo',
    fechaRegistro: new Date() ,
    },
    
    {
    id:2,
    nombre: 'Paola',
    apellido:'Perez',
    fechaRegistro: new Date(), 
  
    },
    {
    id: 3,
    nombre: 'Leo',
    apellido:'Mendez',
    fechaRegistro: new Date()
    },

]


@Injectable({
  providedIn: 'root'
})
export class AlumnosServiciosService {
   
   private alumnos$ = new BehaviorSubject<alumno[]>([]);

  constructor(
    private router:Router,
    private httpClient: HttpClient
  ) { }

  getObtenerAlumno(): Observable<alumno[]> {
    return this.httpClient.get<alumno []>('http://localhost:3000/students')
    .pipe(
      tap ((alumno: alumno[])=> this.alumnos$.next(alumno)),
      mergeMap(()=> this.alumnos$.asObservable())
    )
  }

  obtenerAlumnoPorId(id: number) : Observable<alumno | undefined>{
    return this.alumnos$.asObservable().pipe(
      map((alumnos)=> alumnos.find((a)=> a.id === id))
    )
  }
}
