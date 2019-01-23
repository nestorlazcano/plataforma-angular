import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SettingsService, SharedService, SidebarService, UsuarioService, LoginGuard } from './';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    SettingsService, 
    SharedService, 
    SidebarService,
    UsuarioService,
    LoginGuard
  ],
  declarations: [],
})
export class ServicesModule { }
