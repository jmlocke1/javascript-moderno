document.addEventListener('DOMContentLoaded', function() {
    
    // Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnEnviar = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const spinner = document.querySelector('#spinner');
    
    
    // Al refrescar la página pueden haber valores en los campos
    const email = {
        email: validarEmail(inputEmail.value) ? inputEmail.value.trim() : '',
        asunto: inputAsunto.value.trim(),
        mensaje: inputMensaje.value.trim()
    }
    // Si hay valor en el campo email, y es incorrecto, mostrar mensaje de error
    if(!email.email && inputEmail.value) {
        mostrarAlerta('El email no es válido', inputEmail.parentElement);
    }
    // Comprobamos si se puede activar el botón de enviar
    comprobarEmail();

    // Asignar eventos
    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);
    inputAsunto.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);

    formulario.addEventListener('submit', enviarEmail);

    btnReset.addEventListener('click', e => {
        e.preventDefault();
        resetearFormulario();
        
        comprobarEmail();
        cleanAllAlerts(formulario);
    });


    function enviarEmail(e) {
        e.preventDefault();
        spinner.classList.add('flex');
        spinner.classList.remove('hidden');
        setTimeout(() => {
            spinner.classList.remove('flex');
            spinner.classList.add('hidden');
            resetearFormulario();
        }, 3000);
        
    }

    function resetearFormulario() {
        formulario.reset();
        // Reiniciar el objeto
        for(campo in email) {
            email[campo] = '';
        }
    }

    function validar(e) {
        if(e.target.value.trim() === '') {
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            email[e.target.id] = '';
            comprobarEmail();
            return;
        }
        
        if(e.target.id === 'email') {
            // Lo pone en minúscula
            e.target.value = e.target.value.toLowerCase();
            if(!validarEmail(e.target.value)) {
                mostrarAlerta('El email no es válido', e.target.parentElement);
                email[e.target.id] = '';
                comprobarEmail();
                return;
            }
        }

        limpiaAlerta(e.target.parentElement);
        email[e.target.id] = e.target.value.trim();
        // Comprobamos si se puede enviar
        comprobarEmail();
        
    }

    function mostrarAlerta(mensaje, referencia) {
        limpiaAlerta(referencia);
        // Generar alerta en HTML
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2');
        // Inyectar el error al formulario
        referencia.appendChild(error);
    }

    function limpiaAlerta(referencia) {
        // Comprueba si ya existe una alerta
        const alerta = referencia.querySelector('.bg-red-600');
        if(alerta){
            alerta.remove();
        }
    }

    function cleanAllAlerts(referencia) {
        // Remueve todas las alertas del formulario
        const alertas = referencia.querySelectorAll('.bg-red-600');
        alertas.forEach(alerta => alerta.remove() );
    }

    function validarEmail(email) {
        // const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const regex =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,12}$/;
        const resultado = regex.test(email);
        return resultado;
    }

    function comprobarEmail() {
        if(email.email && email.asunto && email.mensaje) {
            btnEnviar.disabled = false;
            btnEnviar.classList.remove('opacity-50');
        } else {
            btnEnviar.disabled = true;
            btnEnviar.classList.add('opacity-50');
        }
    }
});