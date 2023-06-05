import { Component, OnDestroy } from '@angular/core';
import links, { NavItem }  from './nav-items';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Usuario } from 'src/app/login/models';
import { LoginServicioService } from 'src/app/login/servicio/login-servicio.service';
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnDestroy{
  showFiller = false;
   
  loginUser: Usuario | null =null;
  
  suscripcionLoginUser: Subscription | null =null;
  
  links = links;

  constructor (
    private router: Router,
    private loginServis: LoginServicioService
  ) {
    this.suscripcionLoginUser = this.loginServis.obtenerUsuarioAutenticado().subscribe((usuario) => this.loginUser = usuario)
  }
  ngOnDestroy(): void {
    this.suscripcionLoginUser?.unsubscribe();
  }

   logout(): void {
    this.router.navigate(['login']);
    localStorage.removeItem('token');
   }
 
   }

