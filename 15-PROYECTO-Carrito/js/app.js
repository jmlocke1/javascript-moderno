// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();

function cargarEventListeners() {
    // Cuando agregas un curso presionando "Agregar al Carrito"
    listaCursos.addEventListener('click', agregarCurso);
    vaciarCarrito.addEventListener('click', limpiarCarrito);
}

function limpiarCarrito() {
    // Limpiamos el HTML del carrito
    limpiarHTML();
    // Vaciamos el array de artículos
    articulosCarrito = [];
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
        row.querySelector('a').addEventListener('click', eliminaArticulo);
        
        contenedorCarrito.appendChild(row);
    });
}

function eliminaArticulo(e) {
    e.preventDefault();
    const id = e.target.getAttribute('data-id');
    articulosCarrito = articulosCarrito.filter( curso => curso.id !== id );
    carritoHTML();
}

// Elimina los cursos del tbody
function limpiarHTML() {
    // Forma lenta
    // contenedorCarrito.innerHTML = '';
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild( contenedorCarrito.firstChild );
    }
}