import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public id:string[];
  public codigo:string[];
  public numeroInt: any;

  constructor() {
    this.id=['VAWFOK','ATPYUD','FKUPZI','WBXGPL','MEAJTP','LQMVFA','EJSOYT','GZVENJ','TYIDNW','HMHRAW','HMVRAK','TYHDMV','LQZVEA','JOXGCL','JOXHCM'];
    this.codigo=['https://res.cloudinary.com/sunflower-20/image/upload/v1550418901/Matricula-image/primero.jpg','https://res.cloudinary.com/sunflower-20/image/upload/v1550419038/Matricula-image/segundo.jpg','https://res.cloudinary.com/sunflower-20/image/upload/v1550419046/Matricula-image/tercero.jpg','https://res.cloudinary.com/sunflower-20/image/upload/v1550419023/Matricula-image/cuarto.jpg','https://res.cloudinary.com/sunflower-20/image/upload/v1550419038/Matricula-image/quinto.jpg','https://res.cloudinary.com/sunflower-20/image/upload/v1550419038/Matricula-image/sexto.jpg','https://res.cloudinary.com/sunflower-20/image/upload/v1550419038/Matricula-image/septimo.jpg','https://res.cloudinary.com/sunflower-20/image/upload/v1550419030/Matricula-image/octavo.jpg','https://res.cloudinary.com/sunflower-20/image/upload/v1550419030/Matricula-image/noveno.jpg','https://res.cloudinary.com/sunflower-20/image/upload/v1550419023/Matricula-image/decimo.jpg','https://res.cloudinary.com/sunflower-20/image/upload/v1550419030/Matricula-image/onceavo.jpg','https://res.cloudinary.com/sunflower-20/image/upload/v1550419023/Matricula-image/doceavo.jpg','https://res.cloudinary.com/sunflower-20/image/upload/v1550419046/Matricula-image/treceavo.jpg','https://res.cloudinary.com/sunflower-20/image/upload/v1550419023/Matricula-image/cuartoavo.jpg','https://res.cloudinary.com/sunflower-20/image/upload/v1550419038/Matricula-image/quintoavo.jpg']
   }

  ngOnInit() {
    let numeroRandom1 =  (Math.random() * 14);  //3 significa que estara en el intervalo 0 - 3 
     this.numeroInt = numeroRandom1.toFixed(0);
  }

  
  Validar(){
    let textcaptcha = $("#txtCaptcha").val();
    let textCaptchaMayus = textcaptcha.toUpperCase();
    if(this.id[this.numeroInt] == textCaptchaMayus && this.codigo[this.numeroInt]){
      console.log("Lo has echo excelente");
    }else{
      console.log("Has fallado");
    }
}

CambiarCaptcha(){
  let numeroRandom2 =  (Math.random() * 14);  //3 significa que estara en el intervalo 0 - 3
  this.numeroInt = numeroRandom2.toFixed(0);
  this.id[this.numeroInt];
  this.codigo[this.numeroInt];
}


}
