const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', validarFormulario);
let event;
function validarFormulario(e) {
    e.preventDefault();
    event = e;
    console.log(e.target.action);
}