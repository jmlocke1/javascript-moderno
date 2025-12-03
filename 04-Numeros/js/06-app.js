const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
let numero4 = 20;

console.log(Number.parseInt(numero1));
console.log(Number.parseFloat(numero2));
console.log(Number.parseInt(numero3)); // Se obtiene Nan, ya que Uno no es un número

// Revisar si un número es entero
console.log(Number.isInteger(numero4));
numero4 = 20.2;
console.log(Number.isInteger(numero4)); // El resultado es false, pues ya no es un entero

