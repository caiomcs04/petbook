import { Router } from '@angular/router';
import { UserService } from './../../authentication/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'petbook-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss'],
})
export class CabecalhoComponent {
  constructor(private userService: UserService, private router: Router) {}

  user$ = this.userService.getUser();

  logOut() {
    this.userService.logOut();
    this.router.navigate(['']);
  }
}
