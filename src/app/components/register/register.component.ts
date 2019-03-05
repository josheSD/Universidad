import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { SignUpInfo } from '../../auth/signup-info';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  MessageSuccess : any;

  constructor(private authService: AuthService, private router : Router) { }

  ngOnInit() { }

  onSubmit() {
    console.log(this.form);

    this.signupInfo = new SignUpInfo(
      this.form.name,
      this.form.username,
      this.form.email,
      this.form.password);

    this.authService.signUp(this.signupInfo).subscribe(
      data => {
        this.isSignedUp = true;
        this.isSignUpFailed = false;
        this.limpiarEntradas();
        this.MessageSuccess = data;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error;
        this.isSignUpFailed = true;
      }
    );
  }

  limpiarEntradas(){
    $("#name").val('');
    $("#username").val('');
    $("#email").val('');
    $("#password").val('');
  }

}