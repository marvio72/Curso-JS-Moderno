import { ahorro, Cliente, mostrarInformacion, nombreCliente, tieneSaldo} from './cliente.js';

console.log(nombreCliente);
console.log(ahorro);

console.log(mostrarInformacion(nombreCliente, ahorro));

tieneSaldo(ahorro);

const clienteNuevo = new Cliente(nombreCliente, ahorro);


console.log(clienteNuevo.mostrarInformacion());