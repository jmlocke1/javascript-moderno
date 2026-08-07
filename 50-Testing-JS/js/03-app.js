function suma(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

async function sumaAsync(a,b) {
    return Promise.resolve( suma(a,b) );
}

let resultado = suma(1, 2);
let esperado = 3;
expected(esperado).toBe(resultado);
expected(esperado).toEqual(resultado);

resultado = restar(11, 5);
esperado = 6;

expected(esperado).toBe(resultado);

test('Suma 10 + 20 y el resultado debe ser 30', async () => {
    const resultado = await sumaAsync(10,20);
    const esperado = 31;
    expected(esperado).toBe(resultado);
});

async function test(mensaje, callback) {
    try {
        await callback();
        console.log(`El Test: ${mensaje} se ejecutó correctamente`);
    } catch (error) {
        console.error('Error: ', error);
    }
}

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