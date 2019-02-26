import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../services/cursos.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import 'fullcalendar';
import { Cursos } from '../../models/cursos';


@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
  styleUrls: ['./matricula.component.css']
})
export class MatriculaComponent implements OnInit {

  public curso : Cursos;
  public ok : any;

  constructor(
    private cursosService: CursosService,
    private router:Router
  ) {
    this.curso = new Cursos('','','','');
   }

  ngOnInit() {
      this.Calendar();
  }

  Calendar(){
    
    this.cursosService.getCursos().subscribe(
      res =>{
             $('#calendar').fullCalendar({
              slotLabelFormat:"H:mm",     //cambia a formato 24:00 hours primera columna
                                          //themeSystem: 'bootstrap4', agrega los styles 
              defaultView: 'agendaWeek',  //muestra la ventana de semana como main
              locale:'es',                //cambia el idioma a castellano
              allDaySlot:false,           //no muestra accion del día
              timeFormat: 'H:mm',         //cambia formato de 24:00 hours en los días
              height:'auto',              //desaparece el scroll
              

              header: {
                left: 'agendaDay,agendaWeek',
                right: 'today prev,next',
              center:'title'
              },
          
              views: {
                week: {
                  // options apply to basicWeek and agendaWeek views
                  columnHeaderFormat:'dddd D',
                  minTime:'07:00:00',
                  maxTime:'23:59:00',
                  contentHeight:'auto',
                  titleFormat: 'MMMM YYYY'
                },
                day: {
                  // options apply to basicDay and agendaDay views
                  columnHeaderFormat:'dddd D MMMM YYYY',
                  minTime:'07:00:00',
                  maxTime:'23:59:00',
                  contentHeight:'auto',
                  titleFormat:'[]'
                },
              },
              events:res
            });
            $('.fc-agendaDay-button').text('Dia');
            $('.fc-today-button').text('hoy');
            $('.fc-agendaWeek-button').text('semana');

      },
      err => console.log(err)
    )

  }

  saveCurso(form){
     this.cursosService.saveCurso(this.curso).subscribe(
       res =>{
         this.Calendar();
         form.reset();
       },
       err => console.log(err)
     )
  }

  CustomAlert(dialog){
    var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogoverlay = document.getElementById('dialogoverlay');
        var dialogbox = document.getElementById('dialogbox');
        dialogoverlay.style.display = "block";
        dialogoverlay.style.height = winH+"px";
        dialogbox.style.left = (winW/2) - (550 * .5)+"px";
        dialogbox.style.top = "100px";
        dialogbox.style.display = "block";
        document.getElementById('dialogboxhead').innerHTML = "Este es el mensaje ";
        document.getElementById('dialogboxbody').innerHTML = dialog;
        
  }
   
  Cerrar(){
    document.getElementById('dialogbox').style.display = "none";
		document.getElementById('dialogoverlay').style.display = "none";
  }
  

 

  

}
