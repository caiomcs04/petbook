import { MensageModule } from './../componentes/mensage/mensage.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LoginComponent } from './login/login.component';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';


@NgModule({
  declarations: [HomeComponent, LoginComponent, NovoUsuarioComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MensageModule
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
