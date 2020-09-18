const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

// todos los elementos deben cumplir con la  condición para que sea verdadero

// Todos se deben de cumplir
const resultado = carrito.every(producto => producto.precio < 500);
console.log(resultado);

// Al menos uno se debe de cumplir
const resultado2 = carrito.some(producto => producto.precio < 500);
console.log(resultado2);