import * as UI from './interfaz.js';

UI.formularioBuscar.addEventListener('submit', buscarCancion);

function buscarCancion(e) {
    e.preventDefault();
   
    // obtener los datos de los campos input
    const artista = document.querySelector('#artista').value,
          cancion = document.querySelector('#cancion').value;
          
    // Validar los campos
    if (artista === '' || cancion === '') {
        UI.divMensajes.textContent = 'Error... Todos los campos son obligatorios';
        UI.divMensajes.classList.add('error');

        setTimeout(() => {
            UI.divMensajes.textContent = '';
            UI.divMensajes.classList.remove('error');
        }, 2000);

        return;
    }
}
