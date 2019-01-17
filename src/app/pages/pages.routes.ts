import { Routes, RouterModule } from '@angular/router';


import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const ROUTES: Routes = [
    { 
        path: '', 
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent, data: { breadcrumb: 'Dashboard' } },
            { path: 'progress', component: ProgressComponent, data: { breadcrumb: 'Progress' } },
            { path: 'graficas1', component: Graficas1Component, data: { breadcrumb: 'Gráficas' } },
            { path: 'promesas', component: PromesasComponent, data: { breadcrumb: 'Promesas' } },
            { path: 'rxjs', component: RxjsComponent, data: { breadcrumb: 'RxJS' } },
            { path: 'account-settings', component: AccountSettingsComponent, data: { breadcrumb: 'Configuración de Cuenta' } },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        ] 
    },    
];


export const PAGES_ROUTING = RouterModule.forChild( ROUTES );