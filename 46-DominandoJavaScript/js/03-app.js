const numero1 = 20;
const numero2 = '40';

// Coerción implícita
console.log(numero1 + numero2);

// Coerción explícita
console.log(Number(numero2) + numero1);

console.log(numero1.toString());

const pedido = [1,2,3,4];
console.log(pedido.toString());
console.log(JSON.stringify(pedido));