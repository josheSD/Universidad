import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthVerifyGuardService implements CanActivate{

  constructor(public auth: AuthService, public router: Router) { }

  canActivate(): boolean {
    /* este guard no permite ingresar a signin o signup porque estas autenticado */
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['matricula']);
      return false;
    }
    return true;
  }

}
