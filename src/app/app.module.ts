import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'; //con esto manejo los pepidos al servidor
import { FormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { NavComponent } from './components/nav/nav.component';
import { MatriculaComponent } from './components/matricula/matricula.component';
import { httpInterceptorProviders } from './auth/auth-interceptor';
import { RegisterComponent } from './components/register/register.component';
import { DataAlumnoComponent } from './components/data-alumno/data-alumno.component';
import { SplitPipe } from './pipe/split.pipe';

export function tokenGetter() {
  return localStorage.getItem('AuthToken');
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    NavComponent,
    MatriculaComponent,
    RegisterComponent,
    DataAlumnoComponent,
    SplitPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['http://localhost:8080','http://localhost:4200','https://joshesd-universidad.herokuapp.com/']
      }
    })

  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
