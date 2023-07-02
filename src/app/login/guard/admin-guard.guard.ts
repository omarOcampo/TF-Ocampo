import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { LoginServicioService } from '../servicio/login-servicio.service'

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {
  constructor( private LoginServicio: LoginServicioService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.LoginServicio.obtenerUsuarioAutenticado().pipe(
      map((usuarioAutenticado)=> {
        if(usuarioAutenticado?.role !== 'admin') {
          alert('No tienes permiso') 
          return false;
        } else {return true}
      })
    );
  }
  
}
