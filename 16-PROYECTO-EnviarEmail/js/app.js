/*
Variables
*/

// Botones
const btnEnviar = document.querySelector('#enviar');

// Campos
const email   = document.querySelector('#email');
const asunto  = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');


eventListeners();
function eventListeners() {
    // Cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);

    // Campos del formulario
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);

}








/*
Funciones
*/
// Iniciando la app
function iniciarApp(){
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

// Validando el formulario
function validarFormulario(e){
    if (e.target.value.length > 0) {
        console.log(e.target.value);
    } else {
        // e.target.style.borderBottomColor =  'red';
        e.target.classList.add('border', 'border-red-500');
    }
   
}