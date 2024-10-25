import { Vehiculo } from './vehiculo';

export class Auto extends Vehiculo {
    constructor(patente: string) {
        super(patente, "Auto");
    }
}
