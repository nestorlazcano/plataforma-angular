import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  menus: any[] = [];

  constructor(
    private _menu: SidebarService
  ) { }

  ngOnInit() {
    this.menus = this._menu.getMenu();
  }

}
