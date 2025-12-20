
iniciarApp();

function iniciarApp() {
    console.log('Iniciando App...');
    segundaFuncion();
}

function segundaFuncion() {
    console.log('Desde la segunda función');

    usuarioAutenticado('José Miguel');
}


function usuarioAutenticado(usuario) {
    console.log(`Autenticando usuario... espere...`);
    console.log(`Usuario autenticado correctamente: ${usuario}`);
}