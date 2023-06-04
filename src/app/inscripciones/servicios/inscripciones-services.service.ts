import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InscriptionWithAll } from '../models';

@Injectable({
  providedIn: 'root'
})
export class InscripcionesServicesService {

  constructor(private httpClient : HttpClient) { }

  getAllInscriptions () : Observable<InscriptionWithAll[]>{
    return this.httpClient.get<InscriptionWithAll[]>('http://localhost:3000/inscription?_expand=course&_expand=student&_expand=subject')
  }
}
