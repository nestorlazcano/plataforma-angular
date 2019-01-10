import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styleUrls: ['./grafico-dona.component.css']
})
export class GraficoDonaComponent implements OnInit {

  @Input() labels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];

  @Input() data:number[] = [350, 450, 100];

  @Input() type:string = 'doughnut';

  @Input() title:string = 'Gráfica de Dona';

  constructor() { }

  ngOnInit() {
  }

}
