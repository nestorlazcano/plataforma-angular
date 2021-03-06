import { NgModule } from "@angular/core";


import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


//********************  Modulos  *************************//
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTING } from './pages.routes';
import { ChartsModule } from 'ng2-charts';


//********************  Componentes  *************************//
import { PagesComponent } from './pages.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


//********************  Pipes  *************************//
import { KeysPipe } from '../pipes/keys.pipe';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


@NgModule({
    declarations: [       
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent,
        IncrementadorComponent,
        GraficoDonaComponent,
        KeysPipe,
        AccountSettingsComponent,
        PromesasComponent,
        RxjsComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent
    ],
    imports: [
        BrowserModule,
        SharedModule,
        PAGES_ROUTING,
        FormsModule,
        ChartsModule,
        RouterModule
    ]
})


export class PagesModule {}