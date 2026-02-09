import nuevaFuncion, { nombreCliente, ahorro, mostrarInformacion, tieneSaldo, Cliente } from "./cliente.js";
import nuevaFuncion2, { Empresa } from "./empresa.js";

nuevaFuncion();
nuevaFuncion2();
console.log(nombreCliente);
console.log(ahorro);
console.log(mostrarInformacion(nombreCliente, ahorro));

const cliente = new Cliente(nombreCliente, ahorro);
console.log(cliente.mostrarInformacion());

// Importar empresa

const empresa = new Empresa('Código con Juan', 100, 'Aprendizaje en Línea');
console.log(empresa.mostrarInformacion());