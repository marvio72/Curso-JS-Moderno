// Variables y Selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');

   /*tiempo del settimeout*/
const tiempo = 1000;


// Eventos
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

    formulario.addEventListener('submit', agregarGasto);
}




// Clases
class Presupuesto {
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }
}

class UI {
    insertarPresupuesto(cantidad){
        // Extrayendo los valores
        const { presupuesto, restante} = cantidad;

        // Agregar al HTML
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirAlerta(mensaje, tipo){
        // Crear el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');

        if(tipo === 'error'){
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }

        // Mensaje de error 
        divMensaje.textContent = mensaje;

        // Insertar en el HTML
        document.querySelector('.primario').insertBefore(divMensaje, formulario);

        // Quitar del HTML
        setTimeout(() => {
            divMensaje.remove();
        }, tiempo);
    }
}

//Instanciar
const ui = new UI();
let presupuesto


// Funciones
function preguntarPresupuesto() {
    const presupuestoUsuario = prompt('¿Cual es tu presupuesto?');

    // console.log(Number(presupuestoUsuario));

    if (presupuestoUsuario === '' || presupuestoUsuario <= 0 || isNaN(presupuestoUsuario  || presupuestoUsuario === null)) {
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
    }

    // Presupuesto valido
    presupuesto = new Presupuesto(presupuestoUsuario);
    // console.log(presupuesto);

    ui.insertarPresupuesto(presupuesto);
}

// Añade gastos
function agregarGasto(e) {
    e.preventDefault();

    // Leer los datos del formulario
    const nombre = document.querySelector('#gasto').value;
    const cantidad = document.querySelector('#cantidad').value;

    // Validar
    if(nombre === '' || cantidad === ''){
        ui.imprimirAlerta('Todos los campos son obligatorios', 'error');
        return;
    } else if(cantidad <= 0 || isNaN(cantidad)){
        ui.imprimirAlerta('Cantidad no valida', 'error');
        return;
    }

    console.log('agregando');
    
    
}