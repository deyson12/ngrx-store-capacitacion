import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prestacion } from '../prestacion/model/prestacion';
import { Tarifa } from './model/tarifa';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import * as fromTarifaAction from './tarifa.actions';

@Component({
  selector: 'app-tarifar',
  templateUrl: './tarifar.component.html',
  styleUrls: ['./tarifar.component.sass']
})
export class TarifarComponent implements OnInit {

  prestacion: Prestacion;

  tarifa: Tarifa = {
    moneda: 'COP',
    valor: null
  }

  constructor(private router: Router, private readonly store: Store<AppState>) { 
    this.store.subscribe( status => {
      this.prestacion = {...status.prestacion};
      this.tarifa = {...status.tarifa};
    });
  }

  ngOnInit(): void {
  }

  seleccionarPrestador() {

    console.log('Tarifa', this.tarifa);
    const action = new fromTarifaAction.GuardarAction(this.tarifa);
    this.store.dispatch(action);

    this.router.navigateByUrl('/prestador');
  }

}
