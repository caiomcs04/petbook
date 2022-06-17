import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  getToken(){
    return localStorage.getItem(KEY) ?? '';
  }

  saveToken(token:string){
    localStorage.setItem(KEY,token);
  }

  excludeToken(){
    localStorage.removeItem(KEY);
  }

  possuiToken(){
    return !!this.getToken()
  }
}
