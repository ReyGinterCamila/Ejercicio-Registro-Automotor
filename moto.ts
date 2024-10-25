import { Vehiculo } from './vehiculo';

export class Moto extends Vehiculo {
    constructor(patente: string) {
        super(patente, "Moto");
    }
}
