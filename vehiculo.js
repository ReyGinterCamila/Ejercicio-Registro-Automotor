"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
class Vehiculo {
    constructor(patente, tipo) {
        this.patente = patente;
        this.tipo = tipo;
    }
    // Get
    getPatente() {
        return this.patente;
    }
    // Set
    setPatente(patente) {
        if (!patente || patente.trim() === "") {
            throw new Error("La patente no puede estar vacía.");
        }
        this.patente = patente;
    }
    getTipo() {
        return this.tipo;
    }
    setTipo(tipo) {
        this.tipo = tipo;
    }
    mostrarInfo() {
        return `Patente: ${this.patente}, Tipo: ${this.tipo}`;
    }
}
exports.Vehiculo = Vehiculo;
