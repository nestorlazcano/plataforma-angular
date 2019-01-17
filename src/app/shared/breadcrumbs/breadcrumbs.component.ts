import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  title: string;

  constructor(
    private _router: Router,
    private _title: Title,
    private _meta: Meta
  ) { 

    this.rutaActual().subscribe( data => {
      this.title = data.breadcrumb;
      this._title.setTitle(`AdminPro - ${this.title}`); 
      
      let meta: MetaDefinition = {
        name: 'description',
        description: this.title
      };

      this._meta.updateTag(meta);
    } );
    
  }

  rutaActual(): Observable<any> {
    return this._router.events.pipe(
      filter( event => event instanceof ActivationEnd ),
      filter( (event: ActivationEnd) => event.snapshot.firstChild === null ),
      map( (event: ActivationEnd) => event.snapshot.data )
    );
  }

  ngOnInit() {
  }

}
