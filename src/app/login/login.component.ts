import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { UsuarioService } from '../services/usuario/usuario.service';
import { Usuario } from '../models/usuario.model';
import { Title } from '@angular/platform-browser';

declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;

  recuerdame: boolean = false;

  constructor(
    private _router: Router,
    private _usuarioService: UsuarioService,
    private _title: Title
  ) { 
    this._title.setTitle(`AdminPro - Login`); 
  }

  ngOnInit() {
    init_plugins();

    this.email = localStorage.getItem('email') || '';

    if (this.email) {
      this.recuerdame = true;
    } 

  }

  entrar(form: FormControl) {  

    if ( form.invalid )
      return;
    
    if ( form.value.recuerdame ) {
      localStorage.setItem('email', form.value.email);
    } else {
      localStorage.removeItem('email');
    }

    let usuario = new Usuario(null, form.value.email, form.value.password);

    this._usuarioService.login(usuario).subscribe( () => this._router.navigate(['/dashboard']) );
     
  }

}
