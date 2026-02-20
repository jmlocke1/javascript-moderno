const $notificar = document.querySelector('#notificar');

$notificar.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then( resultado => {
            console.log('El resultado es ', resultado);
        })
});

const $verNotificacion = document.querySelector('#verNotificacion');
$verNotificacion.addEventListener('click', () => {
    if(Notification.permission === 'granted') {
        const notificacion = new Notification(`El estado de la notificación es ${Notification.permission}`, {
            icon: 'img/hacer1.jpg',
            body: 'Código con Juan, aprende con proyectos reales'
        });
        notificacion.onclick = function() {
            window.open('https://codigoconjuan.com');
        }
    }
});