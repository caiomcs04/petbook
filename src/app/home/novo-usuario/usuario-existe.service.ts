import { AbstractControl } from '@angular/forms';
import { NovoUsuarioService } from './../novo-usuario.service';
import { Injectable } from '@angular/core';
import { first, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioExisteService {
  constructor(private novoUsuarioService: NovoUsuarioService) {}

  usuarioJaExiste() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((userName) =>
          this.novoUsuarioService.getUserByName(userName)
        ),
        map((userExiste) => (userExiste ? { usuarioExistente: true } : null)),
        first()
      );
    };
  }
}
