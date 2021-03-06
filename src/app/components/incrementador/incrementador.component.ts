import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @Input() leyenda: string = 'leyenda';

  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  @ViewChild('txtProgress') txtProgress: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onChanges(newValue: number) {

    if(newValue >= 100) {
      this.progreso = 100;
    } else if (newValue <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }

    this.txtProgress.nativeElement.value = this.progreso;

    this.cambioValor.emit( this.progreso );
  }

  cambiarValor(num: number) {
    this.progreso += num;

    if (this.progreso > 100) 
      this.progreso = 100;

    else if (this.progreso < 0)
      this.progreso = 0;

    this.cambioValor.emit( this.progreso );
  }

}
