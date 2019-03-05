import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'https://joshesd-universidad.herokuapp.com/api/test/user';
  private pmUrl = 'https://joshesd-universidad.herokuapp.com/api/test/pm';
  private adminUrl = 'https://joshesd-universidad.herokuapp.com/api/test/admin';

  constructor(private http: HttpClient) { }

  getUserBoard(): Observable<any> {
    return this.http.get(this.userUrl);
  }

  getPMBoard(): Observable<any> {
    return this.http.get(this.pmUrl);
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(this.adminUrl);
  }
}
