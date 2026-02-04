// Selectores
const $pacienteInput = document.querySelector('#paciente');
const $propietarioInput = document.querySelector('#propietario');
const $emailInput = document.querySelector('#email');
const $fechaInput = document.querySelector('#fecha');
const $sintomasInput = document.querySelector('#sintomas');
const $formulario = document.querySelector('#formulario-cita');
const $contenedorCitas = document.querySelector('#citas');
$formulario.reset();


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
$formulario.addEventListener('submit', submitCita);



function datosCita(e) {
    citaObj[e.target.id] = e.target.value;
}

function submitCita(e) {
    e.preventDefault();
    if(Object.values(citaObj).some(valor => valor.trim() === '')) {
        new Notificacion({
            texto: 'Todos los campos son obligatorios',
            tipo: 'error'
        });
        return;
    }
    new Notificacion({
        texto: 'Paciente registrado correctamente',
        tipo: 'exito'
    });
    citas.agregar(citaObj);
    $formulario.reset();
    vaciarCitaObj();
}

function vaciarCitaObj() {
    for(let clave in citaObj) {
        citaObj[clave] = '';
    }
}

class Notificacion {
    constructor({texto, tipo}) {
        this.texto = texto;
        this.tipo = tipo;

        this.mostrar();
    }

    mostrar() {
        // Eliminamos las alertas previas
        this.removePrevious();
        const alerta = document.createElement('DIV');
        alerta.classList.add('text-center', 'w-full', 'p-3', 'text-white', 'my-5', 'alert', 'uppercase', 'font-bold', 'text-sm');

        // Si es de tipo error, agrega una clase
        alerta.classList.add(this.tipoAlerta());

        // Mensaje de error
        alerta.textContent = this.texto;

        // Insertar en el DOM
        $formulario.parentElement.insertBefore(alerta, $formulario);

        // Quitar después de 5 segundos
        setTimeout( () => {
            alerta.remove()
        }, 5000);
    }

    tipoAlerta() {
        return this.tipo === 'error' ? 'bg-red-500' : 'bg-green-500';
    }

    removePrevious() {
        const alertas = $formulario.parentElement.querySelectorAll(`.alert.${this.tipoAlerta()}`);
        alertas.forEach(alerta => {
            if(alerta.textContent === this.texto) alerta.remove();
        });
    }
}

class AdminCitas {
    constructor() {
        this.restore();
    }

    agregar({...cita}) {
        this.citas = [...this.citas, cita];
        this.save();
        this.mostrar();
    }

    mostrar() {
        this.limpiarHTML();

        // Generando las citas
        this.citas.forEach(cita => {
            const divCita = document.createElement('div');
            divCita.classList.add('mx-5', 'my-10', 'bg-white', 'shadow-md', 'px-5', 'py-10' ,'rounded-xl', 'p-3');

            const paciente = document.createElement('p');
            paciente.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            paciente.innerHTML = `<span class="font-bold uppercase">Paciente: </span> ${cita.paciente}`;

            const propietario = document.createElement('p');
            propietario.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            propietario.innerHTML = `<span class="font-bold uppercase">Propietario: </span> ${cita.propietario}`;

            const email = document.createElement('p');
            email.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            email.innerHTML = `<span class="font-bold uppercase">E-mail: </span> ${cita.email}`;

            const fecha = document.createElement('p');
            fecha.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            fecha.innerHTML = `<span class="font-bold uppercase">Fecha: </span> ${cita.fecha}`;

            const sintomas = document.createElement('p');
            sintomas.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            sintomas.innerHTML = `<span class="font-bold uppercase">Síntomas: </span> ${cita.sintomas}`;

            // Agregar al HTML
            divCita.appendChild(paciente);
            divCita.appendChild(propietario);
            divCita.appendChild(email);
            divCita.appendChild(fecha);
            divCita.appendChild(sintomas);
            $contenedorCitas.appendChild(divCita);
        });    
    }

    limpiarHTML() {
        while($contenedorCitas.firstChild) {
            $contenedorCitas.removeChild($contenedorCitas.firstChild);
        }
    }

    save() {
        // De momento solo se guarda en localStorage
        localStorage.setItem( 'citas', JSON.stringify(this.citas) );
    }

    restore() {
        let citas = JSON.parse(localStorage.getItem('citas'));
        
        if(citas) {
            // Si hay datos guardados en localStorage, asignamos el valor y llamamos a mostrar
            this.citas = citas;
            this.mostrar();
        } else {
            // Si no hay datos, asignamos un array vacío
            this.citas = [];
        }
    }
}

const citas = new AdminCitas();