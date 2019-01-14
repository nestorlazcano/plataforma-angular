import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(
    public _settings: SettingsService 
  ) { 
    
  }

  ngOnInit() {
    this._settings.establecerCheck();
  }

  cambiarColor(tema: string) {
    this._settings.cambiarColor(tema, true);
  }

}
