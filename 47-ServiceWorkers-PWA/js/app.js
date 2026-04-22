if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then( registrado => console.log('Se instaló correctamente ', registrado))
        .catch( error => console.error('Falló la instalación', error))
} else {
    console.log('Service Workers no soportado');
}