let cliente = {
    mesa: '',
    hora: '',
    pedido: []
}
const $btnGuardarCliente = document.querySelector('#guardar-cliente'),
      $nuevaOrden = document.querySelector('#nueva-orden'),
      $mesa = document.querySelector('#mesa'),
      $hora = document.querySelector('#hora'),
      $formulario = document.querySelector('#formulario')
      $cuerpoFormulario = document.querySelector('.modal-body form');
const maxMesas = 8;

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
    console.log(cliente);
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