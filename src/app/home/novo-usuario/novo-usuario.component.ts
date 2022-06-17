import { UsuarioExisteService } from './usuario-existe.service';
import { NovoUsuario } from './../../model/novo-usuario';
import { NovoUsuarioService } from './../novo-usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { minusculoValidator } from './minusculo.validator';
import { userPasswordEqual } from './usuario-senha.validator';

@Component({
  selector: 'petbook-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.scss'],
})
export class NovoUsuarioComponent implements OnInit {
  novoUsuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private novoUsuarioService: NovoUsuarioService,
    private usuarioExisteService: UsuarioExisteService
  ) {}

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        fullName: ['', [Validators.required, Validators.minLength(4)]],
        userName: [
          '',
          [minusculoValidator],
          [this.usuarioExisteService.usuarioJaExiste()],
        ],
        password: [''],
      },
      {
        validators: [userPasswordEqual],
      }
    );
  }

  cadastrar() {
    const newUser = this.novoUsuarioForm.getRawValue() as NovoUsuario;
    console.log(newUser);
  }
}
