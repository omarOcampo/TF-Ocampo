import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PipesModule } from '../shared/pipes/pipes.module';
import { LoginServicioService } from './servicio/login-servicio.service';
import { LoginServicioMocks } from './servicio/mocks/loginServicio-Mocks';

describe('Pruebas del loginComponent', () => {
   let component: LoginComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        RouterModule,
        HttpClientModule,
        ReactiveFormsModule,
        PipesModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        MatInputModule
        
      ],
      declarations: [
        LoginComponent
      ],
      providers: [
        {
            provide: LoginServicioService,
            useClass: LoginServicioMocks
        }
      ]
    }).compileComponents();

    const fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Si campo mail esta vacio, el FormControl del mail debe ser invalido', () => {
    component.loginForm.setValue({email: null, password : null})

    expect(component.emailControl.invalid).toBeTrue();
  });
  it('Si campo password esta vacio, el FormControl del password debe ser invalido', () => {
    component.loginForm.setValue({email: null, password : null})

    expect(component.passwordControl.invalid).toBeTrue();
  });
  
  it ('Si el loginForm es valido, debe llamar al metodo login del LoginService', () => 
  {
    component.loginForm.setValue({email: "omar@gmail.com", password: "12345"});
    const spyOnLoginServiceLogin = spyOn(TestBed.inject(LoginServicioService), 'login');
    component.onSubmit();
    expect(component.loginForm.valid).toBeTrue();
    expect(spyOnLoginServiceLogin).toHaveBeenCalled();
  }
  )

});