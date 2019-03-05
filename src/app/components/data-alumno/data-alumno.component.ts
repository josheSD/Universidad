import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-data-alumno',
  templateUrl: './data-alumno.component.html',
  styleUrls: ['./data-alumno.component.css']
})
export class DataAlumnoComponent implements OnInit {

  userInfo: any;
  board: string;
  errorMessage: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserBoard().subscribe(
      data => {
        this.userInfo = {
          name: data.user.name,
          email: data.user.email,
          username: data.user.username
        };
        this.board = data.description;
      },
      error => {
        this.errorMessage = `${error.status}: ${error.error}`;
      }
    );
  }

}
