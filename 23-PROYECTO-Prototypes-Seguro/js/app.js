// Variables globales
const formulario = document.querySelector("#cotizar-seguro");

// Constructor
function Seguro(marca,year,tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

function UI(){}

// Llenar las opciones de los años
UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear(),
          min = max - 20;

    const selectYear = document.querySelector('#year');

    for (let i = max; i >= min; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
};

// Muestra alertas en pantalla
// Usamos en este un arrowfunction ya que no tenemos ningun elemento en nuestro constructor.
UI.prototype.mostrarMensaje = (mensaje, tipo) => {
    const div = document.createElement('div');

    if (tipo === 'error') {
        div.classList.add('error');
    } else {
        div.classList.add('correcto');
    }

    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;

    // Insertar mensaje en HTML
    // LLamamos la variable global formulario.
    formulario.insertBefore(div, document.querySelector('#resultado'));

    setTimeout(() => {
        div.remove(); // Borra el mensaje despues de 3 segundos
    }, 3000);

};


// Instanciar unicodeBidi: 
const ui = new UI();


document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones(); // Llena el select con los años
});

eventListeners();

function eventListeners() {
    // const formulario = document.querySelector("#cotizar-seguro");
    formulario.addEventListener('submit', cotizarSeguro);
}

// Al ser un evento agregamos e
function cotizarSeguro(e){
    e.preventDefault();

    // Leer la marca seleccionada
    const marca = document.querySelector('#marca').value;
    
    // leer el año seleccionado
    const year = document.querySelector('#year').value;

    // leer el tipo de cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    
    if (marca === '' || year === '' || tipo === '') {
        ui.mostrarMensaje('Todos los campos son obligatorios', 'error');
        return;
    } 
    
    ui.mostrarMensaje('Cotizando...', 'exito');

    // Instanciar el seguro


    // Utilizar el prototype que va a cotizar.
    
}