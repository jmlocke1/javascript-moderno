document.addEventListener('DOMContentLoaded', function() {
    
    // Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputCC = document.querySelector('#ccemail');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnEnviar = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const spinner = document.querySelector('#spinner');
    
    
    // Al refrescar la página pueden haber valores en los campos
    const email = {
        email: validarEmail(inputEmail.value) ? inputEmail.value.trim() : '',
        ccemail: validarEmail(inputCC.value) ? inputCC.value.trim() : '',
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
    inputCC.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);
    inputAsunto.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);

    formulario.addEventListener('submit', enviarEmail);

    btnReset.addEventListener('click', e => {
        e.preventDefault();
        resetearFormulario();
        
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
            
            // Crear una alerta
            const alertaExito = document.createElement('P');
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase');
            alertaExito.textContent = 'Mensaje enviado correctamente';
            formulario.appendChild(alertaExito);
            setTimeout(() => {
                alertaExito.remove();
            }, 3000);
        }, 3000);
        
    }

    function resetearFormulario() {
        formulario.reset();
        // Reiniciar el objeto
        for(campo in email) {
            email[campo] = '';
        }
        comprobarEmail();
    }

    function validar(e) {
        if(e.target.value.trim() === '' && e.target.id !== 'ccemail') {
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            email[e.target.id] = '';
            comprobarEmail();
            return;
        }
        
        if((e.target.id === 'email' || e.target.id === 'ccemail') && e.target.value.trim() !== '') {
            console.log('estamos en email', e.target.id);
            // Lo pone en minúscula
            e.target.value = e.target.value.toLowerCase();
            if(!validarEmail(e.target.value)) {
                mostrarAlerta('El email no es válido', e.target.parentElement);
                email[e.target.id] = '';
                comprobarEmail();
                return false;
            }
        }

        limpiaAlerta(e.target.parentElement);
        email[e.target.id] = e.target.value.trim();
        console.log(email);
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
        if(email.email && email.asunto && email.mensaje && (email.ccemail || inputCC.value.trim() === '')) {
            btnEnviar.disabled = false;
            btnEnviar.classList.remove('opacity-50');
        } else {
            btnEnviar.disabled = true;
            btnEnviar.classList.add('opacity-50');
        }
    }
});