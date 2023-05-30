import { Component } from '@angular/core';
import links  from './nav-items';
import { Router } from '@angular/router';
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {
  showFiller = false;

  links = links;

  constructor (
    private router: Router
  ) {}

   logout(): void {
    this.router.navigate(['login']);
    localStorage.removeItem('token');
   }
} 
