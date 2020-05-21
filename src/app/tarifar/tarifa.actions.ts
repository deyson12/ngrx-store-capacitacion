import { Action } from '@ngrx/store';
import { Tarifa } from './model/tarifa';


export const GUARDAR = '[Tarifa] - Guardar'

export class GuardarAction implements Action {

    readonly type = GUARDAR;

    constructor(public payload: Tarifa){}

}

export type actions = GuardarAction;
