import { User } from './../model/user';
import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<User>({});

  constructor(private tokenService: TokenService) {
    if (this.tokenService.possuiToken()) {
      this.decodeJWT();
    }
  }

  private decodeJWT() {
    const token = this.tokenService.getToken();
    const user = jwtDecode(token) as User;
    this.userSubject.next(user);
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  saveToken(token: string) {
    this.tokenService.saveToken(token);
    this.decodeJWT();
  }

  logOut() {
    this.tokenService.excludeToken();
    this.userSubject.next({});
  }

  isLogin() {
    return this.tokenService.possuiToken();
  }
}
