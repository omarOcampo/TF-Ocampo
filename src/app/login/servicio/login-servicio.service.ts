import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {BehaviorSubject, Observable, Subject, map} from 'rxjs';
import { Usuario } from '../models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { establecerUsuario } from 'src/app/store/auth/auth.actions';
import { selectAuthUser } from 'src/app/store/auth/auth.selectors';
import { NavItem } from 'src/app/dashboard/panel/nav-items';




export interface LoginFormValue {
  email:string;
  password:string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginServicioService {
   
 private loginUser$ = new BehaviorSubject<Usuario | null>(null);

  constructor(private router: Router,
              private httpClient: HttpClient,
              private store: Store <AppState>) { }
  

  establecerUsuarioAutenticado(usuario: Usuario) : void {
    this.store.dispatch(establecerUsuario({ payLoad : usuario}))
  }
              
  obtenerUsuarioAutenticado() : Observable<Usuario| null > {
    return this.store.select(selectAuthUser);
  }

  login (formValue: LoginFormValue):void {
   this.httpClient.get <Usuario []>(
    `http://localhost:3000/usuarios`,
    {
      params:{
        ...formValue
      },
    }
   ).subscribe({
    next: (usuarios) =>{
      const usuarioAutenticado = usuarios [0];
      if (usuarioAutenticado){
        localStorage.setItem('token', usuarioAutenticado.token)
        this.establecerUsuarioAutenticado(usuarioAutenticado);
        this.router.navigate(['dashboard'])
      } else{
        alert ('Usuario y/o contraseña incorrectos')
      }
    }
   })
  }

  logout(): void {
    localStorage.removeItem('authUser');
    this.router.navigate(['auth'])
  }

  veryFyRole(link: NavItem): Observable<boolean>{
    return this.loginUser$.pipe(
      map((usuarioAuth) => link.allowerRoles.some((r) =>r === usuarioAuth?.role)));
  }

  verificarToken(): Observable <Boolean>{
    const token= localStorage.getItem ('token');
     return this.httpClient.get <Usuario []> (
      `http://localhost:3000/usuarios?token=${token}`,
      {
        headers: new HttpHeaders({
          'autorizacion' : token || '',
        }),
      })
    .pipe(
      map ((usuarios) =>{
        const usuarioAutenticado = usuarios [0];
        if (usuarioAutenticado){
          localStorage.setItem('token', usuarioAutenticado.token)
          this.establecerUsuarioAutenticado (usuarioAutenticado)
         }
      return !!usuarioAutenticado;
        })
      );

 }
}
