import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelModule } from './dashboard/panel/panel.module';
import { AppRoutingModule } from './app-routing.module';
import { CursosModule } from './cursos/cursos.module';
import { LoginModule } from './login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { actionReducerMap } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';




@NgModule({
  declarations: [
    AppComponent,
  
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PanelModule,
    AppRoutingModule,
    CursosModule,
    LoginModule,
    HttpClientModule,
    StoreModule.forRoot(actionReducerMap, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
