import { Vehiculo } from './vehiculo';

export class Camion extends Vehiculo {
    constructor(patente: string) {
        super(patente, "Camión");
    }
}
