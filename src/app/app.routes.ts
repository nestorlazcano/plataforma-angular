import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';


const ROUTES: Routes = [    
    { path: 'login', component: LoginComponent }, 
    { path: 'register', component: RegisterComponent },      
    { path: '**', redirectTo: '/dashboard' }
];

export const ROUTING = RouterModule.forRoot(ROUTES, { useHash: true });
