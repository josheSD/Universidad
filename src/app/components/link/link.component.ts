import { Component, OnInit } from '@angular/core';
import { LinksService } from '../../services/links.service';




@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {

  public links : any = [];

  constructor(
    private linkService : LinksService
  ) { }

  ngOnInit() {
    this.getLinks();

  }

  getLinks(){
      this.linkService.getLinks().subscribe(
        res =>{
            this.links = res;
        },
        err => console.log(err)
      );
  }

  deleteLink(id: string){
    this.linkService.deleteLink(id).subscribe(
      res =>{
          this.getLinks();
      },
      err => console.log(err)
    )
  }

}
