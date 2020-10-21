import { ahorro, Cliente, mostrarInformacion, nombreCliente, tieneSaldo} from './cliente.js';
import { Empresa } from './empresa.js';

console.log(nombreCliente);
console.log(ahorro);

console.log(mostrarInformacion(nombreCliente, ahorro));

tieneSaldo(ahorro);

const clienteNuevo = new Cliente(nombreCliente, ahorro);


console.log(clienteNuevo.mostrarInformacion());

// Importar empresa
const empresa = new Empresa('Codigo Facilito', 500, 'Desarrollo Web');

console.log(empresa.mostrarInformacion());