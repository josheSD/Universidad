import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { MatriculaComponent } from './components/matricula/matricula.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuardService as AuthGuard} from './auth/auth-guard.service';
import { AuthVerifyGuardService as AuthVerifyGuard } from './auth/auth-verify-guard.service';
import { DataAlumnoComponent } from './components/data-alumno/data-alumno.component';

const routes: Routes = [
  {path:'', component: LoginComponent, canActivate: [AuthVerifyGuard] },
  {path:'signup',component: RegisterComponent, canActivate: [AuthVerifyGuard] },
  {path:'matricula',component:MatriculaComponent,canActivate: [AuthGuard]},
  {path:'matricula/alumno', component:DataAlumnoComponent, canActivate:[AuthGuard]},
  {path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
