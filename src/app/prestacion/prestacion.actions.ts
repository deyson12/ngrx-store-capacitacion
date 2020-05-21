import { Action } from '@ngrx/store';
import { Prestacion } from './model/prestacion';


export const GUARDAR = '[Prestacion] - Guardar';

export class GuardarAction implements Action {

    readonly type = GUARDAR;

    constructor(public payload: Prestacion){}

}

export type actions = GuardarAction;
