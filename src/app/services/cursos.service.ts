import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cursos } from '../models/cursos';


@Injectable({
  providedIn: 'root'
})
export class CursosService {

  API_URL = 'http://localhost:8080/api';

  constructor(
    private http: HttpClient
  ) { }

  getCursos(): Observable<any>{
    return this.http.get(`${this.API_URL}/matricula/cursos`);
  }

  getMaterias(): Observable<any>{
    return this.http.get(`${this.API_URL}/matricula/materias`);
  }

  getMateria(): Observable<any>{
    return this.http.get(`${this.API_URL}/matricula/materia`);
  }

  saveMateria(materia: Cursos):Observable<any>{
    return this.http.post(`${this.API_URL}/matricula/materia/add`,materia);
  }

}
