const busqueda = document.querySelector('.busqueda');
let evento;
busqueda.addEventListener('input', (e) => {
    if(e.target.value === '') {
        console.log('Falló la validación');
    }
});