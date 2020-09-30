/*
Variables
*/
const resultado = document.querySelector('#resultado');
/*
Eventos
*/
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();
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