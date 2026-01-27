// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
const contenido = document.querySelector('#contenido');

// Inicializamos tweets recuperándolos desde localStorage, o con un array vacío
let tweets = [];

// Event Listeners
eventListeners();

function eventListeners() {
    formulario.addEventListener('submit', agregarTweet);

    // Cuando el documento está listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) ?? [];
        // Mostramos los tweets en pantalla, si los hay
        crearHTML();
    });
}


// Funciones
function agregarTweet(e) {
    e.preventDefault();

    // Textarea donde el usuario escribe
    const tweet = e.target.querySelector('#tweet').value.trim();
    
    // Validación
    if(tweet === '') {
        mostrarError('No puede ir vacío');
        return;
    }
    const tweetObj = {
        id: Date.now(),
        tweet
    };
    // Añadir al array de los tweets
    tweets = [...tweets, tweetObj];
    
    // Una vez agregado vamos a crear el HTML
    crearHTML();

    // Reiniciar el formulario
    formulario.reset();

    // Agregar los tweets al localStorage
    localStorage.setItem( 'tweets', JSON.stringify(tweets) );
}

// Mostrar mensaje de error
function mostrarError(error) {
    const mensajeError = document.createElement('P');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');
    // Insertarlo en el contenido
    contenido.appendChild(mensajeError);

    setTimeout(() => {
        mensajeError.classList.add('fade-out');
        setTimeout(() => {
            mensajeError.remove();
        }, 500);
    }, 2000);
}

function crearHTML() {
    limpiarHTML();
    if( tweets.length > 0 ) {
        tweets.forEach( tweet => {
            // Crear el HTML
            const li = document.createElement('li');

            // Añadir el texto
            li.innerText = tweet.tweet;

            // Insertarlo en el HTML
            listaTweets.appendChild(li);
        });
    }
}

function limpiarHTML() {
    while(listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}