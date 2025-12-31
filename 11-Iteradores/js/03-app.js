// Fizz Buzz

// Si un número es múltiplo de 3 ... Fizz
// Si es múltiplo de 5 ... Buzz
// 15 30 45 ... FIZZBUZZ!

for(let i = 1; i < 100; i++ ) {
    if( i % 15 === 0 ) {
        console.log(`Número ${i} : FIZZBUZZ`);
    } else if( i % 5 === 0 ) {
        console.log(`Número ${i} : BUZZ`);
    } else if( i % 3 === 0 ) {
        console.log(`Número ${i} : FIZZ`);
    }
}