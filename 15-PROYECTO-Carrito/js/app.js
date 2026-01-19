// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let img;
cargarEventListeners();

function cargarEventListeners() {
    // Cuando agregas un curso presionando "Agregar al Carrito"
    listaCursos.addEventListener('click', agregarCurso);
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
    // console.log(curso.children);
    img = curso.querySelector('img');
    // Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').getAttribute('src'), // Si se utiliza .src, devuelve la ruta absoluta, incluyendo el nombre de dominio. getAttribute devuelve la ruta relativa
        titulo: curso.querySelector('.info-card h4').textContent,
        autor: curso.querySelector('.info-card p').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    console.log(infoCurso);
}