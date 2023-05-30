import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

export interface Time {
  hora:number,
  minutos:number,
  segundos:number,
}

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  
  private _reloj$= new BehaviorSubject<Time>(this.horaActual);

  constructor() {
    setInterval(() => {
      this._reloj$.next(this.horaActual);
    }, 1000)
   }

  get reloj(): Observable<string>{
    return this._reloj$.asObservable()
    .pipe (
      map((time: { hora: any; minutos: any; segundos: any; }) => {
        return `${time.hora}:${time.minutos}:${time.segundos}`
      })
    )
  }

  get horaActual(): Time {
    const now = new Date();

    return {
      hora: now.getHours(),
      minutos: now.getMinutes(),
      segundos: now.getSeconds()
    }
  }
}
