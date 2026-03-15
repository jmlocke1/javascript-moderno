let cliente = {
    mesa: '',
    hora: '',
    pedido: []
}
const $btnGuardarCliente = document.querySelector('#guardar-cliente');
$btnGuardarCliente.addEventListener('click', guardarCliente);
const $mesa = document.querySelector('#mesa'),
      $hora = document.querySelector('#hora')

function guardarCliente() {
    const mesa = $mesa.value.trim();
    const hora = $hora.value.trim();

    // Revisar si hay campos vacíos
    const camposVacios = [ mesa, hora ].some( campo => campo === '' );

    if(camposVacios) {
        console.log('Hay al menos un campo vacío');
    } else {
        console.log('Todos los campos están llenos');
    }
}