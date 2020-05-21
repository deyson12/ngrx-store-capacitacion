import { Component, OnInit } from '@angular/core';
import { Prestacion } from './model/prestacion';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import * as fromPrestacionAction from './prestacion.actions'

@Component({
  selector: 'app-prestacion',
  templateUrl: './prestacion.component.html',
  styleUrls: ['./prestacion.component.sass']
})
export class PrestacionComponent implements OnInit {

  prestacion: Prestacion = {
    codigo: '',
    descripcion: ''
  };

  constructor(private router: Router, private readonly store: Store<AppState>) { 

    this.store.subscribe( status => {
      this.prestacion = {...status.prestacion};
    });

  }

  ngOnInit(): void {
  }

  tarifar() {

    console.log('Prestación: ', this.prestacion);
    const action = new fromPrestacionAction.GuardarAction(this.prestacion);
    this.store.dispatch(action);

    this.router.navigateByUrl('/tarifar');
  }

}
