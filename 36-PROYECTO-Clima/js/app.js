const container = document.querySelector('div.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

window.addEventListener('load', () => {
    formulario.addEventListener('click', buscarClima);
});


function buscarClima(e) {
    e.preventDefault();
    
    // validar 
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

    if (ciudad === '' || pais === '') {
        mostrarError('Ambos campos son obligatorios');
        return;
    }
    
    // Consultar la API
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