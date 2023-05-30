import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginFormValue, LoginServicioService } from './servicio/login-servicio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    emailControl = new FormControl('',[Validators.required]);
    passwordControl = new FormControl('',[Validators.required]);
    
     loginForm = new FormGroup({
      email: this.emailControl,
      password: this.passwordControl,
    });
    
    constructor(private loginService:LoginServicioService){} 

    onSubmit():void {
      if(this.loginForm.invalid){
        this.loginForm.markAllAsTouched();
      }else {
        this.loginService.login(this.loginForm.value as LoginFormValue);
      }
    }
}
