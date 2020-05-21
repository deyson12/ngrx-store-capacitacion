import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { Prestacion } from '../prestacion/model/prestacion';
import { Tarifa } from '../tarifar/model/tarifa';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-propuesta',
  templateUrl: './propuesta.component.html',
  styleUrls: ['./propuesta.component.sass']
})
export class PropuestaComponent implements OnInit {
  
  prestacion: Prestacion;
  tarifa: Observable<Tarifa>;

  constructor(private readonly store: Store<AppState>) { 
    this.store.select('prestacion').subscribe( prestacion =>{
      this.prestacion = prestacion;
    });

    this.tarifa = this.store.pipe(select('tarifa'));
  }

  ngOnInit(): void {
  }

}
