import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { AddComponent } from './components/add/add.component';
import { LinkComponent } from './components/link/link.component';
import { UpdateComponent } from './components/update/update.component';
import { MatriculaComponent } from './components/matricula/matricula.component';



const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'matricula',component:MatriculaComponent },
  {path:'links', component: LinkComponent},
  {path:'links/add', component: AddComponent},
  {path:'links/update/:id', component: UpdateComponent},
  {path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
