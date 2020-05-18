import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrestacionComponent } from './prestacion/prestacion.component';
import { TarifarComponent } from './tarifar/tarifar.component';
import { PrestadorComponent } from './prestador/prestador.component';
import { PropuestaComponent } from './propuesta/propuesta.component';


const routes: Routes = [
  { path: '', redirectTo: '/prestacion', pathMatch: 'full' },
  { path: 'prestacion', component: PrestacionComponent },
  { path: 'tarifar', component: TarifarComponent },
  { path: 'prestador', component: PrestadorComponent },
  { path: 'propuesta', component: PropuestaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
