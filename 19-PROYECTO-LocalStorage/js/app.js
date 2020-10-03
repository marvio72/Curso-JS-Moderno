// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
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
    
    const tweetObj = {
        id: Date.now(),
        tweet
        // tweet: tweet es igual que al anterior
    }

    // Añadir al arreglo de tweets
    tweets = [...tweets, tweetObj];

    // Una vez agregado vamos a crear el HTML
    crearHTML();

    // Reiniciar el formulario
    formulario.reset();
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

// muestra listado de los tweets
function crearHTML() {

    limpiarHTML();
    
    if (tweets.length > 0) {
        tweets.forEach(tweet => {
            // Crear el HTML
            const li = document.createElement('li');

            // añadir el texto 
            li.innerHTML = tweet.tweet;

            // insertarlo en el html
            listaTweets.appendChild(li);
        });
    }
}

// Limpiar el HTML
function limpiarHTML() {
    while (listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}