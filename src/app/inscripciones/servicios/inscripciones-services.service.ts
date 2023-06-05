import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, concatMap } from 'rxjs';
import { CreateInscripcionData, Inscription, InscriptionWithAll } from '../models';

@Injectable({
  providedIn: 'root'
})
export class InscripcionesServicesService {

  constructor(private httpClient : HttpClient) { }

  createInscripcion (data: CreateInscripcionData): Observable <InscriptionWithAll>{
    return this.httpClient.post<Inscription> ('http://localhost:3000/inscription', data)
    .pipe(
      concatMap((createResponse) =>
      this.getInscriptionWithAllById (createResponse.id)
      )
     )
  }

  getInscriptionWithAllById( id: number): Observable <InscriptionWithAll>{
    return this.httpClient.get <InscriptionWithAll>('http://localhost:3000/inscription/${id}?_expand=student&_expand=subject&_expand=course')
  }

  getAllInscriptions () : Observable<InscriptionWithAll[]>{
    return this.httpClient.get<InscriptionWithAll[]>('http://localhost:3000/inscription?_expand=course&_expand=student&_expand=subject')
  }
  deleteInscripcionById (id: number): Observable <unknown>{
    return this.httpClient.delete (`http://localhost:3000/inscription/${id}`)
  }
}
