import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  url: string = 'http://localhost:3000/user/login';

  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) {}

  authenticate(
    user?: string,
    password?: string
  ): Observable<HttpResponse<any>> {
    return this.httpClient
      .post(
        this.url,
        {
          userName: user,
          password: password,
        },
        { observe: 'response' }
      )
      .pipe(
        tap((res) => {
          const authToken = res.headers.get('x-access-token') ?? '';
          this.userService.saveToken(authToken);
        })
      );
  }
}
