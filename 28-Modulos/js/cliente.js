const nombreCliente = 'Marco';
const ahorro = 200;



function mostrarInformacion(nombre, ahorro) {
    return `Cliente: ${nombre} Ahorro: ${ahorro}`;
}

function tieneSaldo(ahorro) {
    if (ahorro > 0) {
        console.log('Si tiene Saldo');
    } else {
        console.log('Ya no tiene saldo');
    }
}


export {
    nombreCliente,
    ahorro,
    mostrarInformacion,
    tieneSaldo
}