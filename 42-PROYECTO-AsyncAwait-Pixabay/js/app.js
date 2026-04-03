import { apiKey, urlApi, registrosPorPagina } from "./config.js";
const $resultado = document.querySelector('#resultado');
const $formulario = document.querySelector('#formulario');
const $terminoBusqueda = document.querySelector('#termino');
const $paginacionDiv = document.querySelector('#paginacion');

let totalPaginas;
let iterador;
let paginaActual = 1;

window.onload = () => {
    formulario.addEventListener('submit', validarFormulario);
}

function validarFormulario(e) {
    e.preventDefault();
    // Reiniciamos la página actual a 1
    paginaActual = 1;
    $terminoBusqueda.value = $terminoBusqueda.value.trim();

    if($terminoBusqueda.value === '') {
        mostrarAlerta('Agrega un término de búsqueda');
        return;
    }

    buscarImagenes();
}

function mostrarAlerta(mensaje) {
    const existeAlerta = document.querySelector('.bg-red-100');
    
    if(existeAlerta) return;
    const alerta = document.createElement('P');
    alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');
    alerta.innerHTML = `
        <strong class="font-bold">¡Error!</strong>
        <span class="block sm:inline">${mensaje}</span>
    `;
    $formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}

async function buscarImagenes() {
    const termino = $terminoBusqueda.value;
    const url = `${urlApi}?key=${apiKey}&q=${termino}&per_page=${registrosPorPagina}&page=${paginaActual}`;
    // fetch(url)
    //     .then(respuesta => respuesta.json())
    //     .then(resultado => {
    //         totalPaginas = calcularPaginas(resultado.totalHits);
    //         console.log('Total de páginas:',totalPaginas);
    //         mostrarImagenes(resultado.hits);
    //     });
    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        totalPaginas = calcularPaginas(resultado.totalHits);
        console.log('Total de páginas:',totalPaginas);
        mostrarImagenes(resultado.hits);
    } catch (error) {
        console.error(error);
    }
}


// Generador que va a registrar la cantidad de elementos de acuerdo a las páginas
function *crearPaginador(total) {
    for(let i = 1; i <= total; i++) {
        yield i;
    }
}

function mostrarImagenes(imagenes) {
    limpiarHTML($resultado);

    // Iterar sobre el array de imágenes y construir el HTML
    imagenes.forEach(imagen => {
        const { previewURL, webformatURL, likes, views, largeImageURL, pageURL } = imagen;
        const titulo = titlePhoto(imagen);
        $resultado.innerHTML += `
            <div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
                <div class="bg-white">
                    <img class="w-full" src="${webformatURL}" >
                    <div class="p-4">
                        <p class="font-bold">${titulo}</p>
                        <p class="font-bold">${likes} <span class="font-light"> Me gusta</span> </p>
                        <p class="font-bold">${views} <span class="font-light"> Veces vista</span> </p>
                        <a
                            class="block w-full bg-blue-800 hover:bg-blue-500 text-white uppercase font-bold text-center rounded mt-5 p-1"
                            href="${largeImageURL}" target="_blank" rel="noopener noreferrer" 
                            title="Ver imagen: ${titulo}. Se abre en una nueva pestaña"
                        >
                            Ver Imagen
                        </a>
                    </div>
                </div>
            </div>
        `;
    });
    limpiarHTML($paginacionDiv);
    imprimirPaginador();
}

function imprimirPaginador() {
    iterador = crearPaginador(totalPaginas);

    while(true) {
        const { value, done } = iterador.next();
        if(done) return;

        // Caso contrario, genera un botón por cada elemento en el generador
        const boton = document.createElement('A');
        boton.href = '#';
        boton.dataset.pagina = value;
        boton.textContent = value;
        const backGround = paginaActual === value ? 'bg-green-400' : 'bg-yellow-400';
        boton.classList.add('siguiente', backGround, 'px-4', 'py-1', 'mr-2', 'font-bold', 'mb-4', 'rounded');
        boton.onclick = () => {
            paginaActual = value;
            console.log(paginaActual);
            buscarImagenes();
        }
        $paginacionDiv.appendChild(boton);
    }
}

function titlePhoto(imagen) {
    const { pageURL, id } = imagen;
    const photoElements = pageURL.split('/');
    let titulo = photoElements.filter(titulo => titulo.includes(id))[0];
    // Quitamos el id del título
    titulo = titulo.replace(id, '');
    // Sustituimos los guiones altos o bajos por espacios
    titulo = titulo.replaceAll('-', ' ').trim();
    titulo = titulo.replaceAll('_', ' ').trim();
    // Primer carácter en mayúscula
    titulo = titulo[0].toUpperCase() + titulo.substring(1)
    return titulo;
}

function calcularPaginas(total) {
    return Math.ceil( total / registrosPorPagina );
}

function limpiarHTML(elemento) {
    while(elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }
}