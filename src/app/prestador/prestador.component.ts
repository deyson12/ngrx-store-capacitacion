import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prestador } from './model/prestador';

@Component({
  selector: 'app-prestador',
  templateUrl: './prestador.component.html',
  styleUrls: ['./prestador.component.sass']
})
export class PrestadorComponent implements OnInit {

  prestadores: Prestador[] = new Array<Prestador>();
  prestador: Prestador;

  constructor(private router: Router) { }

  ngOnInit(): void {

    const prestador1 = new Prestador();
    prestador1.codigo = '123';
    prestador1.razonSocial = 'Los pollos hermanos';
    prestador1.tipo = 'Juridico';

    const prestador2 = new Prestador();
    prestador2.codigo = '456';
    prestador2.razonSocial = 'Heisenberg lab.';
    prestador2.tipo = 'Natural';

    this.prestadores.push(prestador1);
    this.prestadores.push(prestador2);
  }

  verPropuesta() {

    console.log('Prestador', this.prestador);

    this.router.navigateByUrl('/propuesta');
  }

}
