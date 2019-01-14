import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//********************  Modulos  *************************//
import { RouterModule } from '@angular/router';


//********************  Componentes  *************************//
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';


@NgModule({
    declarations: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        NopagefoundComponent
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        NopagefoundComponent 
    ],
    imports: [
        RouterModule,
        BrowserModule
    ]
})

export class SharedModule {}