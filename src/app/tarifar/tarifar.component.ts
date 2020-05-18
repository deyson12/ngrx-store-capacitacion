import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prestacion } from '../prestacion/model/prestacion';
import { Tarifa } from './model/tarifa';

@Component({
  selector: 'app-tarifar',
  templateUrl: './tarifar.component.html',
  styleUrls: ['./tarifar.component.sass']
})
export class TarifarComponent implements OnInit {

  prestacion: Prestacion = {
    codigo: '',
    descripcion: ''
  };

  tarifa: Tarifa = {
    moneda: 'COP',
    valor: null
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  seleccionarPrestador() {

    console.log('Tarifa', this.tarifa);

    this.router.navigateByUrl('/prestador');
  }

}
