"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
const vehiculo_1 = require("./vehiculo");
class Auto extends vehiculo_1.Vehiculo {
    constructor(patente) {
        super(patente, "Auto");
    }
}
exports.Auto = Auto;
