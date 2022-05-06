import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenauthService {

  constructor(private httpClient: HttpClient){}

  authenticateUser(user:any): Observable<any>{
    return this.httpClient.post<any>("http://localhost:3000/auth/v1", user);
  }

  authenticateToken(token:any): Observable<boolean>{
    return this.httpClient.post<any>("http://localhost:3000/auth/v1/isAuthenticated", {}, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    });
  }

  setToken(token:string){
    localStorage.setItem('bearerToken', token);
  }

  getToken(){
    return localStorage.getItem('bearerToken');
  }

}
