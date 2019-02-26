import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cursos } from '../models/cursos';


@Injectable({
  providedIn: 'root'
})
export class CursosService {

  API_URL = 'http://localhost:4000';

  constructor(
    private http: HttpClient
  ) { }

  getCursos(): Observable<any>{
    return this.http.get(`${this.API_URL}/matricula/cursos`);
  }

  saveCurso(curso: Cursos):Observable<any>{
    return this.http.post(`${this.API_URL}/matricula/cursos/add`,curso);
  }

}
