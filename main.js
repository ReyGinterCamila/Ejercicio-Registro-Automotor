"use strict";
/* Implementar Registro Automotor agregando soporte de motos y camiones usando la herencia.
Se debe poder ejecutar y utilizar los métodos.
*/
Object.defineProperty(exports, "__esModule", { value: true });
const registroAutomotor_1 = require("./registroAutomotor");
const auto_1 = require("./auto");
const moto_1 = require("./moto");
const camion_1 = require("./camion");
// DATOS DE PRUEBA
const registro = new registroAutomotor_1.RegistroAutomotor();
const auto = new auto_1.Auto("AAA111");
const moto = new moto_1.Moto("BBB222");
const camion = new camion_1.Camion("CCC333");
registro.agregarVehiculo(auto);
registro.agregarVehiculo(moto);
registro.agregarVehiculo(camion);
console.log("Lista de vehículos inicial:");
registro.mostrarVehiculos();
console.log("Eliminando la moto:");
registro.darDeBaja("BBB222");
console.log("\nLista de vehículos después de modificaciones:");
registro.mostrarVehiculos();
