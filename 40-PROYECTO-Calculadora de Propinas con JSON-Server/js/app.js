const $btnGuardarCliente = document.querySelector('#guardar-cliente'),
      $alertasPlatillos = document.querySelector('#alertas-platillos');
      $nuevaOrden = document.querySelector('#nueva-orden'),
      $mesa = document.querySelector('#mesa'),
      $hora = document.querySelector('#hora'),
      $formulario = document.querySelector('#formulario')
      $cuerpoFormulario = document.querySelector('.modal-body form'),
      $seccionesOcultas = document.querySelectorAll('.d-none'),
      $contenidoPlatillos = document.querySelector('#platillos .contenido'),
      $resumenContenido = document.querySelector('#resumen .contenido');
const maxMesas = 8;

let cliente = {
    mesa: '',
    hora: '',
    pedido: []
};

const categorias = {
    1: 'Comida',
    2: 'Bebidas',
    3: 'Postres'
};
document.addEventListener('DOMContentLoaded', () => {
    $btnGuardarCliente.addEventListener('click', guardarCliente);
    $nuevaOrden.addEventListener('click', horaActual);
});

function horaActual() {
    // Borramos la mesa anterior, si la hubiera
    $mesa.value = '';
    const fecha = new Date();
    $hora.value = `${String(fecha.getHours()).padStart(2, '0')}:${String(fecha.getMinutes()).padStart(2, '0')}`;
}

function guardarCliente() {
    const mesa = $mesa.value.trim();
    const hora = $hora.value.trim();
    if(!validarOrden(mesa, hora)) return;
    // Asignar datos del formulario a cliente
    cliente = { ...cliente, mesa, hora};

    // Ocultar Modal
    const modalBootstrap = bootstrap.Modal.getInstance($formulario);
    modalBootstrap.hide();
    
    // Mostrar las secciones
    mostrarSecciones();

    // Obtener platillos de la API de JSON-Server
    obtenerPlatillos();
}

function mostrarSecciones() {
    $seccionesOcultas.forEach(seccion => seccion.classList.remove('d-none'));
}

function obtenerPlatillos() {
    const url = 'http://localhost:3000/platillos';

    fetch(url)
        .then( respuesta => respuesta.json() )
        .then( resultado => mostrarPlatillos(resultado))
        .catch( error => console.error(error));
}

function mostrarPlatillos(platillos) {
    platillos.sort( (a, b) => a.categoria - b.categoria );
    console.log(platillos);
    platillos.forEach( platillo => {
        const { id, nombre, precio, categoria } = platillo;
        const row = document.createElement('DIV');
        row.classList.add('row', 'py-3', 'border-top');

        const nombreDiv = document.createElement('DIV');
        nombreDiv.classList.add('col-md-4');
        nombreDiv.textContent = nombre;

        const precioDiv = document.createElement('DIV');
        precioDiv.classList.add('col-md-3', 'fw-bold');
        precioDiv.textContent = `$${precio}`;

        const categoriaDiv = document.createElement('DIV');
        categoriaDiv.classList.add('col-md-3');
        categoriaDiv.textContent = categorias[categoria];

        const inputCantidad = document.createElement('INPUT');
        inputCantidad.type = 'number';
        inputCantidad.min = 0;
        inputCantidad.value = 0;
        inputCantidad.id = `producto-${id}`;
        inputCantidad.classList.add('form-control');
        inputCantidad.onchange = function() {
            const cantidad = parseInt( inputCantidad.value );
            agregarPlatillo({...platillo, cantidad}, inputCantidad);
        }

        const agregar = document.createElement('DIV');
        agregar.classList.add('col-md-2');
        agregar.appendChild(inputCantidad);
        
        row.appendChild(nombreDiv);
        row.appendChild(precioDiv);
        row.appendChild(categoriaDiv);
        row.appendChild(agregar);

        $contenidoPlatillos.appendChild(row);
    });
}

function validarOrden(mesa, hora) {
    // Revisar si hay campos vacíos
    const camposVacios = [ mesa, hora ].some( campo => campo === '' );
    let validado = true;
    if(camposVacios) {
        mostrarAlerta('Todos los campos son obligatorios', $cuerpoFormulario);
        validado = false;
    }

    // Comprobar el número de mesa
    const numMesa = $mesa.value;
    if(numMesa < 1 || numMesa > maxMesas) {
        mostrarAlerta(`El número de mesa debe estar entre 1 y ${maxMesas}`, $cuerpoFormulario);
        validado = false;
    }
    return validado;
}

function mostrarAlerta(mensaje, elemento = null) {
    // Elimina alertas previas con el mismo mensaje
    const alertas = document.querySelectorAll('.alerta');
    alertas?.forEach(alerta => {
        if(alerta.textContent === mensaje) alerta.remove();
    });
    const alerta = document.createElement('DIV');
    alerta.classList.add('invalid-feedback', 'd-block', 'text-center', 'alerta');
    alerta.textContent = mensaje;
    elemento.appendChild(alerta);
    setTimeout(() => {
        alerta.remove();
    }, 3000);
}

function agregarPlatillo(producto, inputCantidad) {
    const {  id, cantidad } = producto;
    let pedido = structuredClone(cliente.pedido);

    if(cantidad > 0) {
        // Comprueba si un elemento ya existe en el array
        if( pedido.some( articulo => articulo.id === id )) {
            // El artículo ya existe, actualizar la cantidad
            const pedidoActualizado = pedido.map( articulo => {
                if(articulo.id === id) {
                    articulo.cantidad = cantidad;
                }
                return articulo;
            });
            // Todavía no sé qué es mejor, si realizar una copia superficial con spread operator o asignarlo directamente
            // cliente.pedido = [...pedidoActualizado];
            cliente.pedido = pedidoActualizado;
        } else {
            // El artículo no existe, lo agregamos al array de pedido
            cliente.pedido = [...pedido, producto];
        }
    } else {
        // Elimina el producto del pedido
        const resultado = pedido.filter( articulo => articulo.id !== id);
        cliente.pedido = [...resultado];
    }
    if(cantidad < 0) {
        mostrarAlerta('No puede poner una cantidad negativa', inputCantidad.parentElement.parentElement);
        inputCantidad.value = 0;
    }
    
    // Limpiamos el HTML de contenido
    limpiarHTML($resumenContenido);

    // Mostrar el resumen
    actualizarResumen();
}

function actualizarResumen() {
    const contenido = document.querySelector('#resumen .contenido');
    const resumen = document.createElement('DIV');
    resumen.classList.add('col-md-6', 'card', 'py-5', 'px-3', 'shadow');

    // Información de la mesa
    const mesa = document.createElement('P');
    mesa.textContent = 'Mesa ';
    mesa.classList.add('fw-bold');

    const mesaSpan = document.createElement('SPAN');
    mesaSpan.textContent = cliente.mesa;
    mesaSpan.classList.add('fw-normal');

    // Información de la hora
    const hora = document.createElement('P');
    hora.textContent = 'Hora ';
    hora.classList.add('fw-bold');

    const horaSpan = document.createElement('SPAN');
    horaSpan.textContent = cliente.hora;
    horaSpan.classList.add('fw-normal');

    // Agregar a sus elementos padre
    mesa.appendChild(mesaSpan);
    hora.appendChild(horaSpan);

    // Título de la sección
    const heading = document.createElement('H3');
    heading.textContent = 'Platillos Consumidos';
    heading.classList.add('my-4', 'text-center');

    // Iterar sobre el array de pedidos
    const grupo = document.createElement('UL');
    grupo.classList.add('list-group');

    const { pedido } = cliente;
    pedido.forEach( articulo => {
        console.log(articulo);
    });

    // Agregar al contenido
    resumen.appendChild(mesa);
    resumen.appendChild(hora);
    resumen.appendChild(heading);

    $resumenContenido.appendChild(resumen);
}

function limpiarHTML(elemento) {
    while(elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }
}