import { AuthenticationService } from './../../authentication/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'petbook-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userName?: string;
  password?: string;
  userValid?: boolean = true;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    this.authenticationService
      .authenticate(this.userName, this.password)
      .subscribe(
        (res) => {
          this.userValid = true
          this.router.navigate(['animais']);
          console.log(res);
        },
        (error) => {
          this.userValid = false
          console.error(error)
        }
      );
  }
}
