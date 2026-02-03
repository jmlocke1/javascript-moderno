// Selectores
const $pacienteInput = document.querySelector('#paciente');
const $propietarioInput = document.querySelector('#propietario');
const $emailInput = document.querySelector('#email');
const $fechaInput = document.querySelector('#fecha');
const $sintomasInput = document.querySelector('#sintomas');

// Objeto de cita
const citaObj = {
    paciente: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: ''
}

// Eventos
$pacienteInput.addEventListener('input', datosCita);
$propietarioInput.addEventListener('input', datosCita);
$emailInput.addEventListener('input', datosCita);
$fechaInput.addEventListener('input', datosCita);
$sintomasInput.addEventListener('input', datosCita);



function datosCita(e) {
    citaObj[e.target.id] = e.target.value;
    console.log(citaObj[e.target.id]);
}