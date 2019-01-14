import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//********************  Modulos  *************************//
import { PagesModule } from './pages/pages.module';
import { ServicesModule } from './services/services.module';
import { FormsModule } from '@angular/forms';


//********************  Componentes  *************************//
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';


//********************  Rutas  *************************//
import { ROUTING } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    ROUTING,
    PagesModule,
    FormsModule
  ],
  providers: [
    ServicesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
