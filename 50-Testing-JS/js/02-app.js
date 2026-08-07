function suma(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

let resultado = suma(1, 2);
let esperado = 3;
expected(esperado).toBe(resultado);

resultado = restar(11, 5);
esperado = 6;

expected(esperado).toBe(resultado);

function expected( esperado ) {
    return {
        toBe(resultado) {
            if(resultado !== esperado) {
                console.error(`El resultado de la función, ${resultado}, es diferente a lo esperado (${esperado}), la prueba no pasó`);
            } else {
                console.log('La prueba pasó correctamente');
            }
        },
        toEqual(resultado) {
            if(resultado !== esperado) {
                console.error(`El resultado de la función, ${resultado}, no es igual a lo esperado (${esperado}), la prueba no pasó`);
            } else {
                console.log('La prueba pasó correctamente');
            }
        }
    }
}