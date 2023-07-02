import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BehaviorSubject, Observable, map, mergeMap, tap } from 'rxjs';
import { Cursos, cursosWithSubject } from 'src/app/cursos/models';


const CURSOS_MOCKS : Cursos[] = [
  {
    id:1,
    subjectId: 1,
    fechaFin: new Date(),
    fechaIni: new Date(),
  },
  {
    id:2,
    subjectId: 2,
    fechaFin: new Date(),
    fechaIni: new Date(),
  },
  {
    id:3,
    subjectId: 3,
    fechaFin: new Date(),
    fechaIni: new Date(),
  }
]

@Injectable({
  providedIn: 'root'
})
export class CursosServiciosService {
  private cursos$ = new BehaviorSubject<Cursos[]>([]);
  constructor(
    private router:Router,
    private httpClient: HttpClient
  ) {}


 obtenerCursos(): Observable<Cursos[]>{
  return this.httpClient.get<Cursos[]>('http://localhost:3000/courses')
    .pipe(
      tap ((cursos: Cursos[])=> this.cursos$.next(cursos)),
      mergeMap(()=> this.cursos$.asObservable())
    )}

obtenerCursoPorId(id: number): Observable<Cursos | undefined>{
  return  this.cursos$.asObservable().pipe
  (map((cursos)=> cursos.find((a)=> a.id === id)))
}

obtenerCursosWithSubject(): Observable<cursosWithSubject[]>{
      return this.httpClient.get<cursosWithSubject[]>(`http://localhost:3000/courses?_expand=subject`)
      }
}
