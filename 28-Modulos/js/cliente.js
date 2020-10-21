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


class Cliente {
    constructor(nombre, ahorro){
        this.nombre = nombre;
        this.ahorro = ahorro;
    }
    mostrarInformacion() {
        return `Cliente: ${this.nombre} Ahorro: ${this.ahorro}`;
    }
}

export {
    nombreCliente,
    ahorro,
    mostrarInformacion,
    tieneSaldo,
    Cliente
}