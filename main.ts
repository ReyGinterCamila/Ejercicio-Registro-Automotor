/* Implementar Registro Automotor agregando soporte de motos y camiones usando la herencia.
Se debe poder ejecutar y utilizar los métodos.
*/

import { RegistroAutomotor } from './registroAutomotor';
import { Auto } from './auto';
import { Moto } from './moto';
import { Camion } from './camion';

// DATOS DE PRUEBA
const registro = new RegistroAutomotor();
const auto = new Auto("AAA111");
const moto = new Moto("BBB222");
const camion = new Camion("CCC333");

registro.agregarVehiculo(auto);
registro.agregarVehiculo(moto);
registro.agregarVehiculo(camion);

console.log("Lista de vehículos inicial:");
registro.mostrarVehiculos();

console.log("Eliminando la moto:");
registro.darDeBaja("BBB222");

console.log("\nLista de vehículos después de modificaciones:");
registro.mostrarVehiculos();
