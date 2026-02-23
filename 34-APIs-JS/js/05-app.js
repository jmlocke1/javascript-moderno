document.addEventListener('visibilitychange', () => {
    if(document.visibilityState === 'visible') {
        console.log('Ejecutar la función para reproducir el video');
    } else if(document.visibilityState === 'hidden') {
        console.log('Ejecutar la función para pausar el video');
    }
});