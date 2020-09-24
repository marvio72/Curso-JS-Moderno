// Variables

const carrito           = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn  = document.querySelector('#vaciar-carrito');
const listaCursos       = document.querySelector('#lista-cursos');

cargarEventListeners();

function cargarEventListeners() {
    // Cundo agregas un curso al "Agregar al Carrito"
    listaCursos.addEventListener ('click', agregarCurso);
}

// Funciones
function agregarCurso(e){
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        console.log('Agregando al carrito...');

    } 
}