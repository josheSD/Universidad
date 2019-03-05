import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../services/cursos.service';
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
  public Cursos: any[];
  public Materias: any[];
  public MessageSuccess: any;
  public ButtonSelecionado : any;

  constructor(
    private cursosService: CursosService
  ) {
    this.curso = new Cursos('','','','');
   }

  ngOnInit() {
      this.ObtenerCursos();
      this.getCalendar();
      this.ObtenerMaterias();
  }
  
  

  ObtenerMaterias(){
    this.cursosService.getMaterias().subscribe(
      res=>{
           this.Materias = res;
      },
      err=>{
        console.log(err)
      }
    )
  }

  ObtenerCursos(){
    this.cursosService.getCursos().subscribe(
      res =>{
        this.Cursos = res;
      },
      err =>{
        console.log(err);
      }
    )
  }

  getCalendar(){

    let VisualizacionName :string;
    let winW = window.innerWidth;
    let PrevNext : string;
    if(winW>768){
      VisualizacionName = 'agendaWeek';
      PrevNext = '[]';
    }else{
      VisualizacionName = 'agendaDay';
      PrevNext = 'prev,next'
    }

    this.cursosService.getMateria().subscribe(
      res =>{
             $('#calendar').fullCalendar({
              slotLabelFormat:"H:mm",     //cambia a formato 24:00 hours primera columna
                                          //themeSystem: 'bootstrap4', agrega los styles 
              defaultView: VisualizacionName,  //muestra la ventana de semana como main
              locale:'es',                //cambia el idioma a castellano
              allDaySlot:false,           //no muestra accion del día
              timeFormat: 'H:mm',         //cambia formato de 24:00 hours en los días
              height:'auto',              //desaparece el scroll
              

              header: {
                left: 'agendaDay,agendaWeek',
                right: PrevNext, //today prev,next o []
              center:'title'
              },
          
              views: {
                week: {
                  // options apply to basicWeek and agendaWeek views
                  columnHeaderFormat:'dddd ',  //dddd D
                  minTime:'07:00:00',
                  maxTime:'23:59:00',
                  contentHeight:'auto',
                  titleFormat: '[]'    //MMMM YYYY
                },
                day: {
                  // options apply to basicDay and agendaDay views
                  columnHeaderFormat:'dddd', //dddd D MMMM YYYY
                  minTime:'07:00:00',
                  maxTime:'23:59:00',
                  contentHeight:'auto',
                  titleFormat:'[]'
                },
              },
               events: res
            });
            $('.fc-agendaDay-button').text('Dia');
            $('.fc-today-button').text('hoy');
            $('.fc-agendaWeek-button').text('semana');
      },
      err => console.log(err)
    )

  }

  setMateria(index){
     this.ButtonSelecionado = index;
     this.cursosService.saveMateria(this.Materias[index]).subscribe(
       res =>{
         this.MessageSuccess = res;
         this.getCalendar();
         this.CambiarBotonSeleccionar();
       },
       err => console.log(err)
     )
  }

  CustomAlert(){
    var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogoverlay = document.getElementById('dialogoverlay');
        var dialogbox = document.getElementById('dialogbox');
        dialogoverlay.style.display = "block";
        dialogoverlay.style.height = winH+"px";
        dialogbox.style.left = (winW/2) - (830 * .5)+"px"; //modifica ancho S1
        dialogbox.style.top = "100px";
        dialogbox.style.display = "block";
        //document.getElementById('dialogboxhead').innerHTML = "Este es el mensaje ";
        //document.getElementById('dialogboxbody').innerHTML = dialog;
        
  }
   
  Cerrar(){
    document.getElementById('dialogbox').style.display = "none";
		document.getElementById('dialogoverlay').style.display = "none";
  }
  
  CambiarBotonSeleccionar(){
     let buton = $('.ActivarButton')[this.ButtonSelecionado];
     console.log(buton);
     buton.style.border = '1px solid hsl(356, 61%, 51%)';
     buton.style.background = "hsl(356, 61%, 51%)";
     buton.innerText = "Seleccionado";
  }
 

  

}
