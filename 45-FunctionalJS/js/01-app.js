// const suma = function(a, b) {
//     return a + b;
// }

// function suma(a, b) {
//     return a + b;
// }

// const resultado = suma;
// console.log(resultado(2, 5));

function operar(num1, num2, operacion) {
	return operacion(num1, num2);
}

function sumar(a, b) {
	return a + b;
}

function restar(a, b) {
	return a - b;
}

const resultadoSuma = operar(5, 3, sumar);
const resultadoResta = operar(7, 2, restar);
console.log(resultadoSuma);
console.log(resultadoResta);

// Retornar funciones
function multiplicador(factor) {
    return function (numero) {
        return numero * factor;
    };
}

const duplicar = multiplicador(2);
console.log(duplicar(5)); // Imprime 10

const triplicar = multiplicador(3);
console.log(triplicar(5)); // Imprime 15