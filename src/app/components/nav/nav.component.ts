import { Component, OnInit } from '@angular/core';

import { TokenStorageService } from '../../auth/token-storage.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  
  public info: any;
  
  public activarNavbar: boolean;
  constructor(
    private router:Router,
    private token: TokenStorageService) 
    { }

  ngOnInit() {
      this.getNavbar();
      this.info = {
        token: this.token.getToken(),
        username: this.token.getUsername(),
        authorities: this.token.getAuthorities()
      };
  }

  getNavbar(){
    
    let winW = window.innerWidth;
    if(winW>768){
      this.activarNavbar = true;
    }else{
      this.activarNavbar = false;
    }
  }

  logout() {
    this.token.signOut();
    this.router.navigate(['']);
  }

}
