import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Link } from '../models/links';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  API_URL = 'http://localhost:4000';

  constructor(
    private http: HttpClient
  ) {}

  getLinks(){
    return this.http.get(`${this.API_URL}/links`);
  }

  getLink(id: string){
    return this.http.get(`${this.API_URL}/links/${id}`);
  }

  saveLink(link: Link): Observable<any>{
      return this.http.post(`${this.API_URL}/links/add`,link);
  }

  updateLink(id:string ,updateLink: Link): Observable<any>{
      return this.http.put(`${this.API_URL}/links/update/${id}`,updateLink);
  } 

  deleteLink(id:string):Observable<any>{
    return this.http.delete(`${this.API_URL}/links/delete/${id}`);
  }  

}
