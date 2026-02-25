const $cargarAPI = document.querySelector('#cargarAPI');
const $resultado = document.querySelector('.contenido.resultado');
$cargarAPI.addEventListener('click', obtenerDatos);
let datosGlobales;
function obtenerDatos() {
    const url = 'https://picsum.photos/list';
    fetch(url)
        .then( respuesta => respuesta.json())
        .then( resultado => mostrarHTML(resultado));
}

function mostrarHTML(datos) {
    datosGlobales = datos;
    let html = '';
    datos.forEach( perfil => {
        const { author, post_url, id, filename, width, height } = perfil;
        const altImage = `Autor: ${author}, Id: ${id}, Imagen: ${filename}`;
        const sizeImage = width > height ? '300/200' : '200/300';
        const div = document.createElement('DIV');
        div.innerHTML = `
            <p>${id} - Autor: ${author}</p>
            <p><a href="${post_url}" target="_blank">Ver Imagen</a></p>
            <p><img loading="lazy" src="https://picsum.photos/id/${id}/${sizeImage}" alt="${altImage}"></p>
        `;
        $resultado.appendChild(div)
    });
}