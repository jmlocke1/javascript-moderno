const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

// Revisar si dos números son iguales
console.log(numero1 == numero3);
console.log(numero1 == numero2); // Solamente comprueba el valor

// Comparador estricto, comprueba el valor y el tipo de datos
console.log(numero1 === numero2);
console.log(numero1 === parseInt(numero2));

// Diferente
const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2);
console.log(numero1 != numero2); // Solo comprueba el valor, por lo que da false
console.log(numero1 !== numero2); // Comparador estricto, comprueba el valor y el tipo, por lo que da true
