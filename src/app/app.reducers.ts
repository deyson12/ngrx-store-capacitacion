import { Prestacion } from './prestacion/model/prestacion';
import { prestacionReducer } from './prestacion/prestacion.reducer';
import { environment } from '../environments/environment';
import { Tarifa } from './tarifar/model/tarifa';
import { tarifaReducer } from './tarifar/tarifa.reducer';

export interface AppState {
    prestacion: Prestacion;
    tarifa: Tarifa;
}

export const structure = {
    prestacion: prestacionReducer,
    tarifa: tarifaReducer
}

export const devConf = {
    maxAge: 25, // Retains last 25 states
    logOnly: environment.production, // Restrict extension to log-only mode
}
