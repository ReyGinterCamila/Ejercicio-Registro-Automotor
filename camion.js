"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camion = void 0;
const vehiculo_1 = require("./vehiculo");
class Camion extends vehiculo_1.Vehiculo {
    constructor(patente) {
        super(patente, "Camión");
    }
}
exports.Camion = Camion;
