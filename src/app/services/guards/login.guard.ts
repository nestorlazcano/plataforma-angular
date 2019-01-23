import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor (
    private _router: Router,
    private _usuarioService: UsuarioService
  ) { }

  canActivate() {

    if (!this._usuarioService.estaLogeado()) {
      console.log('Bloqueado por Guard');
      
      this._router.navigate(['/login']);
      return false;
    }      
    
    return true;
    
  }
}
