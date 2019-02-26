import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LinksService } from '../../services/links.service';
import { Link } from '../../models/links';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  public link;

  constructor(
    private linksService: LinksService,
    private router: Router,
    private activatedRoute :ActivatedRoute
  ) {
    this.link = {
       id: String,
       title: String,
       url: String,
       description: String,
       create_at: new Date()
    }
   }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if(params.id){
      this.linksService.getLink(params.id).subscribe(
        res => {
               this.link = res;
        },
        err => console.log(err)
      )
    }
  }

  updateLink(form){
    delete this.link.create_at;
    this.linksService.updateLink(this.link.id,this.link).subscribe(
      res =>{
        this.router.navigate(['/links']);
      },
      err => console.log(err)
    )
  }



}
