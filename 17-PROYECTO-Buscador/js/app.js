/*
Variables
*/
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');

const max = new Date().getFullYear();
const min = max - 10;
/*
Eventos
*/
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(); // Muestra los automoviles al cargar

    // Lena las opciones de años
    llenarSelect();
});

/*
Funciones
*/
function mostrarAutos() {
    autos.forEach(auto => {
        const {marca,modelo,year,puertas,transmision,precio,color} = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
        ${marca} ${modelo} - ${year} - ${puertas} PUERTAS - TRANSMISION: ${transmision} - PRECIO: ${precio} - COLOR: ${color};
        `;
        // insertar en el html
        resultado.appendChild(autoHTML);
    });
}

// Generar los años del select 
function llenarSelect() {
    for (let i = max; i >= min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); // Agrega las opciones de año al select
    }
}