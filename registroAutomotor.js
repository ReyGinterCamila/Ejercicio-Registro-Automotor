"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
class RegistroAutomotor {
    constructor() {
        this.vehiculos = [];
    }
    //METODOS DESDE CLASE REGISTROAUTOMOTOR
    agregarVehiculo(vehiculo) {
        if (!vehiculo.getPatente() || vehiculo.getPatente().trim() === "") {
            console.log("No se puede agregar un vehículo con la patente vacía.");
            return;
        }
        this.vehiculos.push(vehiculo);
        console.log("Vehículo agregado correctamente!");
    }
    obtenerVehiculo(patente) {
        return this.vehiculos.find(v => v.getPatente() === patente);
    }
    modificarVehiculo(patente, nuevoTipo) {
        const vehiculo = this.obtenerVehiculo(patente);
        if (vehiculo) {
            vehiculo.setTipo(nuevoTipo);
        }
    }
    darDeBaja(patente) {
        this.vehiculos = this.vehiculos.filter(v => v.getPatente() !== patente);
    }
    mostrarVehiculos() {
        this.vehiculos.forEach(v => console.log(v.mostrarInfo()));
    }
}
exports.RegistroAutomotor = RegistroAutomotor;
