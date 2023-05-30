import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './dashboard/panel/panel.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/guard/login.guard';



const routes: Routes = [
  {
    path: 'dashboard',
    canActivate:[LoginGuard],
    component: PanelComponent,
     loadChildren:() => import ('./dashboard/panel/panel.module').then((m) => m.PanelModule) 
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
