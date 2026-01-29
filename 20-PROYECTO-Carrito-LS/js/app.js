// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
const notificacionCarrito = document.querySelector('#notificacion-carrito');
let articulosCarrito = [];

cargarEventListeners();

function cargarEventListeners() {
    // Cuando agregas un curso presionando "Agregar al Carrito"
    listaCursos.addEventListener('click', agregarCurso);
    carrito.addEventListener('click', eliminarCurso);
    vaciarCarritoBtn.addEventListener('click', limpiarCarrito);
    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse(localStorage.getItem('articulos')) ?? [];
        // Mostramos los tweets en pantalla, si los hay
        carritoHTML();
    });
}

function sincronizarStorage() {
    localStorage.setItem( 'articulos', JSON.stringify(articulosCarrito) );
}

function limpiarCarrito() {
    // Vaciamos el array de artículos y sincronizamos con localStorage
    articulosCarrito = [];
    sincronizarStorage();
    // Limpiamos el HTML del carrito llamando a carritoHTML
    carritoHTML();
}

// Funciones
function agregarCurso(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

// Lee el contenido del HTML al que le dimos click y extrae la información del curso
function leerDatosCurso(curso) {
    // Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').getAttribute('src'), // Si se utiliza .src, devuelve la ruta absoluta, incluyendo el nombre de dominio. getAttribute devuelve la ruta relativa
        titulo: curso.querySelector('.info-card h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    // Agregar elementos al array del carrito
    agregaArticulo(infoCurso);
    // console.log(articulosCarrito);
    carritoHTML();
}

function agregaArticulo(infoCurso) {
    let agregado = false;
    articulosCarrito.forEach( curso => {
        if(curso.id === infoCurso.id) {
            curso.cantidad++;
            agregado = true;
        }
    });
    if(!agregado) articulosCarrito = [...articulosCarrito, infoCurso];
    sincronizarStorage();
}

// Muestra el carrito de compras en el HTML
function carritoHTML() {
    // Limpiar el carrito
    limpiarHTML();
    articulosCarrito.forEach( curso => {
        const { imagen, titulo, precio, cantidad, id } = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${curso.imagen}" width="100">
            </td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}" > X </a>
            </td>
        `;
        contenedorCarrito.appendChild(row);
    });
    addNotification();
}

function addNotification() {
    let cantidad = 0;
    // articulosCarrito.forEach( producto => cantidad += producto.cantidad);
    cantidad = articulosCarrito.reduce( (cantidad, articulo) => cantidad + articulo.cantidad, 0);
    if(cantidad > 0) {
        notificacionCarrito.dataset.cantidadnotificacion = cantidad;
        notificacionCarrito.classList.add('notificacion-carrito--visible');
    } else {
        notificacionCarrito.classList.remove('notificacion-carrito--visible');
    }
}

// Elimina un curso del carrito
function eliminarCurso(e) {
    if(e.target.classList.contains('borrar-curso')){
        const id = e.target.getAttribute('data-id');
        const producto = articulosCarrito.find(producto => producto.id === id);
        
        if(producto.cantidad > 1){
            // Si hay más de un artículo, reduce su cantidad en uno
            producto.cantidad--;
        } else {
            // Elimina del array de articulosCarrito por el data-id
            articulosCarrito = articulosCarrito.filter( curso => curso.id !== id );
        }
        
        sincronizarStorage();
        carritoHTML();
    }
}

// Elimina los cursos del tbody
function limpiarHTML() {
    // Forma lenta
    // contenedorCarrito.innerHTML = '';
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild( contenedorCarrito.firstChild );
    }
}