const enlace = document.createElement('A');
console.log(enlace);
// Agragándole el texto
enlace.textContent = 'Nuevo Enlace';

// Añadiendo href
enlace.href = '/nuevo-enlace';
enlace.target = '_blank';
enlace.setAttribute('data-enlace', 'nuevo-enlace');
enlace.classList.add('alguna-clase');
// enlace.onclick = miFuncion;

// function miFuncion() {
//     alert('Diste click');
// }

console.log(enlace);

// Seleccionar la navegación
const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children);
navegacion.insertBefore(enlace, navegacion.children[3]);

// Crear un CARD
const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

// Crear div con la clase de info
const info = document.createElement('DIV');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

// Crear la imagen
const imagen = document.createElement('IMG');
imagen.src = 'img/hacer2.jpg';

console.log(info);

const nuevoCard = createCard({
    categoria: 'concierto',
    textoCategoria: 'Concierto',
    titulo: 'Concierto de Rock',
    precio: '$800 por persona',
    imagen: 'img/hacer1.jpg',
    alt: 'Texto alternativo'
});
console.log(nuevoCard.children);
const contenedorCards = document.querySelector('.hacer .contenedor-cards');
contenedorCards.appendChild(nuevoCard);

/**
 * Función que crea una tarjeta para insertar dinámicamente en el DOM
 * @param {
 *     categoria: La categoría de la tarjeta (clase, concierto, etc.)
 *     textoCategoria: El texto que aparecerá en la categoría
 *     titulo: Texto del título
 *     precio: Precio del producto
 *     imagen: Adivina...
 *     alt: Texto alternativo de la imagen
 * } Objeto con los parámetros 
 * @returns Devuelve una tarjeta para insertar en el DOM
 */
function createCard({ categoria, textoCategoria, titulo, precio, rutaImagen, alt }) {
    const $parrafo1 = document.createElement('p');
    if(textoCategoria) $parrafo1.textContent = textoCategoria;
    if(categoria) $parrafo1.classList.add('categoria', categoria);

    const $parrafo2 = document.createElement('p');
    if(titulo) $parrafo2.textContent = titulo;
    $parrafo2.classList.add('titulo');

    const $parrafo3 = document.createElement('p');
    if(precio) $parrafo3.textContent = precio;
    $parrafo3.classList.add('precio');

    // Crear div con la clase de info
    const $info = document.createElement('DIV');
    $info.classList.add('info');
    $info.append($parrafo1, $parrafo2, $parrafo3);

    // Crear la imagen
    const $imagen = document.createElement('IMG');
    if(rutaImagen) $imagen.src = rutaImagen;
    if(alt) $imagen.alt = alt;

    // Crear el div principal
    const $card = document.createElement('DIV');
    $card.classList.add('card');
    $card.append($imagen, $info);

    return $card;
}

function createCardInnerHTML({ categoria, textoCategoria, titulo, precio, imagen, alt }) {
    const contenido = `
                        <img src="${imagen}" alt="${alt ? alt : ''}">
                        <div class="info">
                            <p class="categoria ${categoria ? categoria : ''}">${textoCategoria ? textoCategoria : ''}</p>
                            <p class="titulo">${titulo ? titulo : ''}</p>
                            <p class="precio">${precio ? precio : ''}</p>
                        </div>    
    `
    // Crear el div principal
    const $card = document.createElement('DIV');
    $card.classList.add('card');
    $card.innerHTML = contenido;

    return $card;
}

const nuevoCard2 = createCardInnerHTML({
    // categoria: 'concierto',
    textoCategoria: 'Concierto',
    titulo: 'Concierto de Salsa y Bachata',
    precio: '1300',
    imagen: 'img/hacer2.jpg',
    alt: 'Imagen del público viendo el concierto'
});
console.log(nuevoCard2.children);
contenedorCards.appendChild(nuevoCard2);