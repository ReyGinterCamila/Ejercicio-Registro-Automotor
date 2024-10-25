import { Vehiculo } from './vehiculo';
import { Auto } from './auto';
import { Moto } from './moto';
import { Camion } from './camion';

export class RegistroAutomotor {
    private vehiculos: Vehiculo[];

    constructor() {
        this.vehiculos = [];
    }

    //METODOS DESDE CLASE REGISTROAUTOMOTOR
    public agregarVehiculo(vehiculo: Vehiculo): void {
        if (!vehiculo.getPatente() || vehiculo.getPatente().trim() === "") {
            console.log("No se puede agregar un vehículo con la patente vacía.");
            return;
    }
    this.vehiculos.push(vehiculo);
        console.log("Vehículo agregado correctamente!");
}

    public obtenerVehiculo(patente: string): Vehiculo | undefined {
        return this.vehiculos.find(v => v.getPatente() === patente);
    }

    public modificarVehiculo(patente: string, nuevoTipo: string): void {
        const vehiculo = this.obtenerVehiculo(patente);
        if (vehiculo) {
            vehiculo.setTipo(nuevoTipo);
        }
    }

    public darDeBaja(patente: string): void {
        this.vehiculos = this.vehiculos.filter(v => v.getPatente() !== patente);
    }

    public mostrarVehiculos(): void {
        this.vehiculos.forEach(v => console.log(v.mostrarInfo()));
    }
}


