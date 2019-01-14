import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      nombre: 'Principal',
      ruta: '#',
      icono: 'mdi mdi-gauge',
      submenu: [
        {
          nombre: 'Progreso',
          ruta: '/progress',
        },
        {
          nombre: 'Gráficas',
          ruta: '/graficas1',
        }
      ]
    }
  ];

  constructor() { }

  getMenu() {
    return this.menu;
  }
}
