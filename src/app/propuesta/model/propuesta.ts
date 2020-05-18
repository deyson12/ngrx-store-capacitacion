import { Prestador } from '../../prestador/model/prestador';
import { Prestacion } from 'src/app/prestacion/model/prestacion';
import { Tarifa } from 'src/app/tarifar/model/tarifa';

export class Propuesta {
    codigo: string;
    prestacion: Prestacion;
    tarifa: Tarifa;
    prestador: Prestador;
}
