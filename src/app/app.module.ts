import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PrestacionComponent } from './prestacion/prestacion.component';
import { TarifarComponent } from './tarifar/tarifar.component';
import { PrestadorComponent } from './prestador/prestador.component';
import { PropuestaComponent } from './propuesta/propuesta.component';

import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { structure, devConf } from './app.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    PrestacionComponent,
    TarifarComponent,
    PrestadorComponent,
    PropuestaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    StoreModule.forRoot(structure),
    StoreDevtoolsModule.instrument(devConf)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
