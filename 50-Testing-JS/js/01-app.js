// Probar 2 valores

function suma(a, b) {
    return a + b + 1;
}

function restar(a, b) {
    return a - b;
}

let resultado = suma(1, 2);
let esperado = 3;
if(resultado !== esperado) {
    console.error(`El resultado de la función, ${resultado}, es diferente a lo esperado (${esperado}), la prueba no pasó`);
} else {
    console.log('La prueba pasó correctamente');
}

resultado = restar(3, 2);
esperado = 1;

if(resultado !== esperado) {
    console.error(`El resultado de la función, ${resultado}, es diferente a lo esperado (${esperado}), la prueba no pasó`);
} else {
    console.log('La prueba pasó correctamente');
}