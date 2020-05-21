import { Prestacion } from './model/prestacion';
import * as fromPrestacionAction from './prestacion.actions'

export function prestacionReducer(state: Prestacion = new Prestacion(), action: fromPrestacionAction.GuardarAction){

    switch(action.type) {

        case fromPrestacionAction.GUARDAR:
            return action.payload;

        default:
            return state;

    }

}
