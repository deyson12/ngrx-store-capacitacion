import { Component, OnInit } from '@angular/core';
import { Prestacion } from './model/prestacion';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  tarifar() {

    console.log('Prestación: ', this.prestacion);

    this.router.navigateByUrl('/tarifar');
  }

}
