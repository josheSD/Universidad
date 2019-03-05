import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { AuthService } from '../../auth/auth.service';
import { AuthLoginInfo } from '../../auth/login-info';
import { TokenStorageService } from '../../auth/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public id:string[];
  public codigo:string[];
  public numeroInt: any;

  form: any = {};
  //isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: AuthLoginInfo;

  constructor(
    private router : Router,private authService: AuthService, private tokenStorage: TokenStorageService
    
  ) {
    this.id=['VAWFOK','ATPYUD','FKUPZI','WBXGPL','MEAJTP','LQMVFA','EJSOYT','GZVENJ','TYIDNW','HMHRAW','HMVRAK','TYHDMV','LQZVEA','JOXGCL','JOXHCM'];
    this.codigo=['https://res.cloudinary.com/sunflower-20/image/upload/v1550418901/Matricula-image/primero.jpg','https://res.cloudinary.com/sunflower-20/image/upload/v1550419038/Matricula-image/segundo.jpg','https://res.cloudinary.com/sunflower-20/image/upload/v1550419046/Matricula-image/tercero.jpg','https://res.cloudinary.com/sunflower-20/image/upload/v1550419023/Matricula-image/cuarto.jpg','https://res.cloudinary.com/sunflower-20/image/upload/v1550419038/Matricula-image/quinto.jpg','https://res.cloudinary.com/sunflower-20/image/upload/v1550419038/Matricula-image/sexto.jpg','https://res.cloudinary.com/sunflower-20/image/upload/v1550419038/Matricula-image/septimo.jpg','https://res.cloudinary.com/sunflower-20/image/upload/v1550419030/Matricula-image/octavo.jpg','https://res.cloudinary.com/sunflower-20/image/upload/v1550419030/Matricula-image/noveno.jpg','https://res.cloudinary.com/sunflower-20/image/upload/v1550419023/Matricula-image/decimo.jpg','https://res.cloudinary.com/sunflower-20/image/upload/v1550419030/Matricula-image/onceavo.jpg','https://res.cloudinary.com/sunflower-20/image/upload/v1550419023/Matricula-image/doceavo.jpg','https://res.cloudinary.com/sunflower-20/image/upload/v1550419046/Matricula-image/treceavo.jpg','https://res.cloudinary.com/sunflower-20/image/upload/v1550419023/Matricula-image/cuartoavo.jpg','https://res.cloudinary.com/sunflower-20/image/upload/v1550419038/Matricula-image/quintoavo.jpg']
   }

  ngOnInit() {
    let numeroRandom1 =  (Math.random() * 14);  //3 significa que estara en el intervalo 0 - 3 
     this.numeroInt = numeroRandom1.toFixed(0);

     if (this.tokenStorage.getToken()) {
      //this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }
  }
  

  
  onSubmit(){
    let textcaptcha = $("#txtCaptcha").val();
    let textCaptchaMayus = textcaptcha.toString();
    textCaptchaMayus = textCaptchaMayus.toUpperCase();

    if(this.id[this.numeroInt] == textCaptchaMayus && this.codigo[this.numeroInt]){
      this.loginInfo = new AuthLoginInfo(
        this.form.username,
        this.form.password);

      this.authService.attemptAuth(this.loginInfo).subscribe(
        data => {
          this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.saveUsername(data.username);
          this.tokenStorage.saveAuthorities(data.authorities);

          this.isLoginFailed = false;
          //this.isLoggedIn = true;
          this.roles = this.tokenStorage.getAuthorities();
          this.Matricula();
        },
        error => {
          this.errorMessage = error.error.reason;
          this.isLoginFailed = true;
        }
      );

    }else{
      let errCaptcha = $("#ErrorCatpcha");
      errCaptcha.addClass('mt-2 text-info');
      errCaptcha.text('Has introducido mal el Captcha');
    }

}

Matricula(){
  this.router.navigate(['/matricula']);
}


CambiarCaptcha(){
  let numeroRandom2 =  (Math.random() * 14);  //3 significa que estara en el intervalo 0 - 3
  this.numeroInt = numeroRandom2.toFixed(0);
  this.id[this.numeroInt];
  this.codigo[this.numeroInt];
}


}
