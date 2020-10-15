// Variable de Campos
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');
// Constante de tiempo en settimeout 
const tiempo = 1000;

// UI
const formulario = document.querySelector('#nueva-cita');
const contenedorCitas = document.querySelector('#citas');


// Class
class Citas {
    constructor(){
        this.citas = [];
    }

    agregarCita(cita){
        this.citas = [...this.citas, cita];
        console.log(this.citas);
    }
}

class UI {
    imprimirAlerta(mensaje, tipo){
        // Crear el div
        const divMensaje = document.createElement('div');
        divMensaje.className = ('text-center alert d-block col-12');

        // Agregar clase en base al tipo de console.error
        if (tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }

        // Mensaje de error
        divMensaje.textContent = mensaje;

        // Mostrarlo en el HTML
        document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-cita'));

        // Borrar el Mensaje en un tiempo
        setTimeout(() => {
            divMensaje.remove();
        }, tiempo);

    }

    mostrarCitas(){
        
    }
}

// Instanciar las clases
const ui = new UI();
const administrarCitas = new Citas();

// Registra Eventos
eventListeners();
function eventListeners(){
    mascotaInput.addEventListener('input', datosCita);
    propietarioInput.addEventListener('input', datosCita);
    telefonoInput.addEventListener('input', datosCita);
    fechaInput.addEventListener('input', datosCita);
    horaInput.addEventListener('input', datosCita);
    sintomasInput.addEventListener('input', datosCita);

    formulario.addEventListener('submit', nuevaCita);
}

// Objeto con la información de la cita
const citaObj = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''
}


// Agrega datos al objeto de cita
function datosCita(e){
    citaObj[e.target.name] = e.target.value;    
}

// Valida y agrega una nueva cita a la clase de citas
function nuevaCita(e){
    e.preventDefault();
    // Extraer la informacvión del objeto de cita 
    const { mascota, propietario, telefono, fecha, hora, sintomas } = citaObj;

    // validar
    if (mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === '') {
        ui.imprimirAlerta('Todos los campos son obligatorios', 'error');

        return;
    }

    // Generar un id 
    citaObj.id = Date.now();

    // creando una nueva cita
    administrarCitas.agregarCita({...citaObj});

    // Reiniciar el objeto para la validación
    reiniciarObjeto();

    // Reinicia el formulario
    formulario.reset();

    // Mostrar el HTML de las citas

}

function reiniciarObjeto(){
    citaObj.mascota = '';
    citaObj.propietario = '';
    citaObj.telefono = '';
    citaObj.fecha = '';
    citaObj.hora = '';
    citaObj.sintomas = '';
}