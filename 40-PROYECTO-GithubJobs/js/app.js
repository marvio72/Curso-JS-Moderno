const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

document.addEventListener('DOMContentLoaded', () => {
  formulario.addEventListener('submit', validarBusqueda);
});

function validarBusqueda(e) {
  e.preventDefault();

  // Validar campo de busqueda
  const busqueda = document.querySelector('#busqueda').value;

  if (busqueda.length < 3) {
    mostrarMensaje('Búsqueda muy corta... Añade más información');
    return;
  }
}

function mostrarMensaje(msg) {
  const alertaPrevia = document.querySelector('.alerta');

  if (!alertaPrevia) {
    const alerta = document.createElement('div');
    alerta.classList.add('bg-gray-100', 'p-3', 'text-center', 'mt-3', 'alerta');
    alerta.textContent = msg;
    formulario.appendChild(alerta);

    setTimeout(() => {
      alerta.remove();
    }, 3000);
  }
}
