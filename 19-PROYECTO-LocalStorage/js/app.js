// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('.lista-tweets');
let tweets = [];




// Event Listeners
eventListeners();

function eventListeners(){
    formulario.addEventListener('submit', agregarTweet);
}




// Funciones
function agregarTweet(e) {
    e.preventDefault();

    
    // Textarea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;
   

    // Validación de campo vacio
    if (tweet === '') {
        mostraError('Un mensaje no puede ir vacio');

        return; // evita que se ejecuten más lineas de código
    } 
    
    console.log('agregando tweet');
}

// Mostrar mensaje de erro
function mostraError(error){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    // Insertarlo en el contenito
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    // Elimina la alerta despues de 3 segundos
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
    
}