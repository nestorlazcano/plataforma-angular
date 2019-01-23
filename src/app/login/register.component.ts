import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert';
import { UsuarioService } from '../services';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

declare function init_plugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup;

  constructor(
    private _usuarioService: UsuarioService,
    private _router: Router,
    private _title: Title
  ) { 
    this._title.setTitle(`AdminPro - Registro`);
  }

  sonIguales(nombre: string, nombre2: string) {
    return (group: FormGroup) => group.controls[nombre].value === group.controls[nombre2].value ? null : { sonIguales: true };
  }

  ngOnInit() {
    init_plugins();

    this.forma = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      correo: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      condiciones: new FormControl(false),
    }, {
      validators: this.sonIguales('password', 'password2')
    });

    this.forma.setValue({
      nombre: 'Nestor Lazcano',
      correo: 'nestor@testing.com',
      password: '123456',
      password2: '123456',
      condiciones: false,
    });
    
  }

  registrarUsuario() {
    
    if( this.forma.invalid ) {
      return;
    }

    if( !this.forma.value.condiciones ) {
      swal('Importante', 'Debe de aceptar las condiciones', 'warning');
      return;
    }

    let usuario = new Usuario(
      this.forma.value.nombre,
      this.forma.value.correo,
      this.forma.value.password      
    );

    this._usuarioService.crearUsuario(usuario).subscribe(resp =>  this._router.navigate(['/login']));
    
  }

}
