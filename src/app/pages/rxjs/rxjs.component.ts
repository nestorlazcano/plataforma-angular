import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {
    
    this.subscription = this.regresaObservable().subscribe( 
      numero => console.log('Subs', numero),
      error => console.log('Error en el obs', error),
      () => console.log('El observador termino')      
    );

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('se va a cerrar');    
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {

    return new Observable( observer => {

      let contador = 0;

      let intervalo = setInterval( () => {

        contador += 1;

        observer.next( {
          valor: contador
        } );

        // if(contador === 9) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }


        // if (contador === 2) {
        //   // clearInterval(intervalo);
        //   observer.error('Auxilio!');
        // }

      }, 1000);
    }).pipe(
      map( (resp: any) => resp.valor),
      filter( valor => valor % 2 === 0  )
    );

  }

}
