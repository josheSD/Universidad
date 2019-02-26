import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LinksService } from '../../services/links.service';
import { Link } from '../../models/links';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


  public link: Link;
  
  constructor(
    private linksService: LinksService,
    private router: Router
  ) {
    this.link = new Link('','','','');
   }

  ngOnInit() {
  
  }

  saveLink(form){
    this.linksService.saveLink(this.link).subscribe(
       (res) =>{
        //form.reset();
         this.router.navigate(['/links']);
       },
       (err) => {
         console.log(<any>err)
       }
    )
  }

}
