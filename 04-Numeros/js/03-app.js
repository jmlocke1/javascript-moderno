let resultado;

// PI
resultado = Math.PI;

// Redondear hacia arriba
resultado = Math.ceil(2.2);

// Redondear hacia abajo:
resultado = Math.floor(2.2);

// Raíz cuadrada
resultado = Math.sqrt(144);

// Valor absoluto
resultado = Math.abs(-500);

// Potencia
resultado = Math.pow(2, Math.pow(2, 2)); // Se pueden anidar las potencias, en este caso, calculamos 2^2^2


// Mínimo con operador de propagación
// const numeros = [8, 5, 17, 9];
// console.log(numeros);
// resultado = Math.min(...numeros);
// operacion = 'mínimo';
// console.log(`El ${operacion} de ${numeros} es ${resultado}`);

// Aleatorio
resultado = Math.round(Math.random() * 100);
console.log(resultado);
