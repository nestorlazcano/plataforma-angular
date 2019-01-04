import { NgModule } from "@angular/core";


//********************  Modulos  *************************//
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTING } from './pages.routes';


//********************  Componentes  *************************//
import { PagesComponent } from './pages.component';

import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTING
    ]
})


export class PagesModule {}