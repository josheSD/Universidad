import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; //con esto manejo los pepidos al servidor
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { AddComponent } from './components/add/add.component';
import { LinkComponent } from './components/link/link.component';
import { LinksService } from './services/links.service';
import { NavComponent } from './components/nav/nav.component';
import { UpdateComponent } from './components/update/update.component';
import { MatriculaComponent } from './components/matricula/matricula.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    AddComponent,
    LinkComponent,
    NavComponent,
    UpdateComponent,
    MatriculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [
    LinksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
