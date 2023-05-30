import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cursos } from 'src/app/cursos/models';


const CURSOS_MOCKS : Cursos[] = [
  {
    id:1,
    nombre: 'angular',
    fechaFin: new Date(),
    fechaIni: new Date(),
  },
  {
    id:2,
    nombre: 'TypeScrip',
    fechaFin: new Date(),
    fechaIni: new Date(),
  },
  {
    id:3,
    nombre: 'UX',
    fechaFin: new Date(),
    fechaIni: new Date(),
  }
]

@Injectable({
  providedIn: 'root'
})
export class CursosServiciosService {
  private cursos$ = new BehaviorSubject<Cursos[]>([]);
  constructor() { }

  obtenerCursos(): Observable<Cursos[]>{
    this.cursos$.next(CURSOS_MOCKS);
    return this.cursos$.asObservable();
  }
}
