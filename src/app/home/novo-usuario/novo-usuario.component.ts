import { Router } from '@angular/router';
import { UsuarioExisteService } from '../../services/usuario-existe.service';
import { NovoUsuario } from './../../model/novo-usuario';
import { NovoUsuarioService } from '../../services/novo-usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { minusculoValidator } from './validator/minusculo.validator';
import { userPasswordEqual } from './validator/usuario-senha.validator';

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
    private usuarioExisteService: UsuarioExisteService,
    private router:Router
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

    if(this.novoUsuarioForm.valid){
      const newUser = this.novoUsuarioForm.getRawValue() as NovoUsuario;
      this.novoUsuarioService.addNewUser(newUser).subscribe(()=>{
        this.router.navigate(['']);
      },
      (error)=> {
        console.log(error);
      })
    }

  }
}
