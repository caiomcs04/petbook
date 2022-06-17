import { Observable } from 'rxjs';
import { NovoUsuario } from './../model/novo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NovoUsuarioService {

  url: string = 'http://localhost:3000/user/signup';

  constructor(private http: HttpClient) {}

  addNewUser(newUser:NovoUsuario):Observable<any>{
    return this.http.post(this.url, newUser);
  }

  getUserByName(userName:string):Observable<any>{
    return this.http.get(`http://localhost:3000/user/exists/${userName}`);
  }
}
