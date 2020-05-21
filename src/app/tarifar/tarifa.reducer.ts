import { Tarifa } from './model/tarifa';
import * as fromTarifaAction from './tarifa.actions';

const initialStatus = {
    moneda: 'USD',
    valor: 0
}

export function tarifaReducer(state: Tarifa = initialStatus, action: fromTarifaAction.actions){

    switch(action.type) {

        case fromTarifaAction.GUARDAR:
            return action.payload;

        default:
            return state;
        
    }

}
