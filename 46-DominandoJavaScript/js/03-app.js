const numero1 = 20;
const numero2 = '40';

console.log(numero1 + numero2); // implicita

console.log(Number(numero2)); // explicita

console.log(numero1.toString());

const pedido = [1, 2, 3, 4];
console.log(pedido.toString());
console.log(JSON.stringify(pedido));

// Cuando se usa una función se puede decir que es un coercion explicita.