const $abrir = document.querySelector('#abrir-pantalla-completa');
const $salir = document.querySelector('#salir-pantalla-completa');

$abrir.addEventListener('click', pantallaCompleta);
$salir.addEventListener('click', cerrarPantallaCompleta);

function pantallaCompleta() {
    document.documentElement.requestFullscreen();
}

function cerrarPantallaCompleta() {
    document.exitFullscreen();
}