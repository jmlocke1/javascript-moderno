let ubica;
window.addEventListener('scroll', () => {
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();
    ubica = ubicacion;
    // console.log(ubicacion.bottom);
    const alturaVentana = window.innerHeight; // Altura de la ventana visible del navegador
    if(ubicacion.top < alturaVentana && ubicacion.bottom > 0 ) {
        console.log('El elemento ya está visible');
    } else if(ubicacion.bottom <= 0 ){
        console.log('El elemento está hacia arriba, da más scroll');
    } else {
        console.log('El elemento está hacia abajo, da más scroll');
    }
});