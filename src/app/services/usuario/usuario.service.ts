import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config';
import  swal from 'sweetalert';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario = null;

  token: string = '';

  constructor(
    private _http: HttpClient,
    private _router: Router
  ) { 
    
    this.cargarStorage();    
  }

  cargarStorage() {

    if (localStorage.getItem('token')) {
      this.usuario = JSON.parse(localStorage.getItem('usuario')); 
      this.token = localStorage.getItem('token') || null;
    } else {
      this.token = '';
      this.usuario = null;
    }
      
  }

  estaLogeado() {    
    return this.token ? true : false;
  }

  crearUsuario(usuario: Usuario) {
    return this._http.post(`${URL_SERVICIOS}usuario`, usuario).pipe(
      map( (resp: any) => {
        swal('Usuario creado exitosamente!', usuario.email, 'success');
        return resp.usuario;
      })
    );
  }

  login(usuario: Usuario) {
    return this._http.post(`${URL_SERVICIOS}login`, usuario).pipe(
      map( (resp: any) => {
        localStorage.setItem('id', resp.id);
        localStorage.setItem('token', resp.token);
        localStorage.setItem('usuario', JSON.stringify(resp.usuario));

        this.cargarStorage();

        return resp;
      })
    );
  }

  logout() {
    this.token = '';
    this.usuario = null;

    localStorage.removeItem('token');
    localStorage.removeItem('usuario');

    this._router.navigate(['/login']);
  }
}
