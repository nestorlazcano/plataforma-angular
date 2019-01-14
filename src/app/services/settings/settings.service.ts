import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes = {
    baseUrl: 'assets/css/colors/{tema}.css',
    url: 'assets/css/colors/default-dark.css',
    tema: 'default-dark'
  };

  constructor(
    @Inject(DOCUMENT) private _document
  ) { 
    this.ajustes = { ...(localStorage.getItem('ajustes') ? JSON.parse(localStorage.getItem('ajustes')) : this.ajustes) };
    this.cambiarColor(this.ajustes.tema);
  }

  establecerAjustes(tema: string) {
    if (tema !== this.ajustes.tema) {
      this.ajustes.tema = tema;
      this.ajustes.url = this.ajustes.baseUrl.replace('{tema}', tema);
      localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
    }
    
    this._document.getElementById('theme').setAttribute('href', this.ajustes.url);
  }

  establecerCheck(tema?: string) {
    let selectores: any = this._document.getElementsByClassName('selector');
    tema = tema || this.ajustes.tema;

    for (let item of selectores) {
      item.classList.remove('working');
      
      if (item.getAttribute('data-theme') === tema)
        item.classList.add('working');
    }
  }

  cambiarColor(tema: string, check: boolean = false) {
    this.establecerAjustes(tema);
    check ? this.establecerCheck(tema) : null;
  }
  
}


interface Ajustes {
  baseUrl: string,
  url: string,
  tema: string
}