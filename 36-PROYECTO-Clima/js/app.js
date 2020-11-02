const container = document.querySelector('div.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

window.addEventListener('load', () => {
    formulario.addEventListener('submit', buscarClima);
});


function buscarClima(e) {
    e.preventDefault();
    
    // validar 
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

    if (ciudad === '' || pais === '') {
        // Hubo un error
        mostrarError('Ambos campos son obligatorios');
        return;
    }
    
    // Consultar la API
    consultarAPI(ciudad,pais);
}

function mostrarError(mensaje) {
    const existeAlerta = document.querySelector('.bg-red-100');

    if (!existeAlerta) {
        
        const alerta = document.createElement('div');
        
        alerta.classList.add('bg-red-100','border-red-400','text-red-700','px-4','py-3','rounded', 'max-w-md', 'mx-auto', 'mt-6', 'text-center');
    
        alerta.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block">${mensaje}</span>
        `;
    
        container.appendChild(alerta);

        // Se elimine la alerta
        setTimeout(() => {
            alerta.remove();
        }, 2000);

    }

}

function consultarAPI(ciudad, pais) {
    const appId = '44525e7433ab195003ee617dd2f10676';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

    fetch(url)
        .then( respuesta => respuesta.json())
        .then( datos => {
            limpiarHTML(); // limpiar el HTML
            if (datos.cod === '404') {
                mostrarError('Ciudad no encontrada');
                return;
            }

            // imprime la respuesta en el HTML
            mostrarClima(datos);
        })
}

function mostrarClima(datos) {
    console.log(datos);

    const {main: {temp, temp_max, temp_min}} = datos;

    const actual = document.createElement('p');
    actual.innerHTML = `${kelvinCelsius(temp)} &#8451;`;
    actual.classList.add('font-bold','text-6xl');

    const resultadoDiv = document.createElement('div');
    resultadoDiv.classList.add('text-center', 'text-white');
    resultadoDiv.appendChild(actual);

    resultado.appendChild(resultadoDiv);
}

const kelvinCelsius = grados => parseInt(grados - 273.15);

function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}