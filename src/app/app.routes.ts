import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages/pages.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { RegisterComponent } from './login/register.component';


const ROUTES: Routes = [
    { 
        path: '', 
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'graficas1', component: Graficas1Component },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        ] 
    },    
    { path: 'login', component: LoginComponent }, 
    { path: 'register', component: RegisterComponent },      
    { path: '**', redirectTo: '/dashboard' }
];

export const ROUTING = RouterModule.forRoot(ROUTES, { useHash: true });
