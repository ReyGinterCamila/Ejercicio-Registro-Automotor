"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
const vehiculo_1 = require("./vehiculo");
class Moto extends vehiculo_1.Vehiculo {
    constructor(patente) {
        super(patente, "Moto");
    }
}
exports.Moto = Moto;
