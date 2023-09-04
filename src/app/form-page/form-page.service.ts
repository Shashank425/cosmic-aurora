import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../classes/Login';

@Injectable({
  providedIn: 'root'
})
export class FormPageService {

  url:string = "localhost:8080/cosmic/";

  constructor(private http: HttpClient ) { }

  updateLoginData(loginObj: Login){
    let body = JSON.stringify(loginObj);
    const httpHeader = new HttpHeaders({'Content-Type':'application/json'});
    this.http.put<Login>(this.url + "login", body, {headers: httpHeader});
  }



}
