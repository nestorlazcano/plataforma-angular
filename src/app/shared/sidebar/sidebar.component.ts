import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services';
import { UsuarioService } from '../../services/usuario/usuario.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  menus: any[] = [];

  constructor(
    private _menu: SidebarService,
    private _usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.menus = this._menu.getMenu();
  }

}
