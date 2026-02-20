const $formulario = document.querySelector('#formulario');
let DB;
function conectarDB() {
    const abrirConexion = window.indexedDB.open('crm', 1);

    abrirConexion.onerror = function() {
        console.log('Hubo un error al abrir la conexión en NuevoCliente');
    };

    abrirConexion.onsuccess = function() {
        DB = abrirConexion.result;
        gestionErroresDB();
    }
}

function gestionErroresDB() {
    DB.onerror = e => {
        // Control de errores genérico de la base de datos
        console.error(`Error en la Base de Datos: ${e.target.error?.message}`);
    }
}

function imprimirAlerta(mensaje, tipo, elemento = $formulario) {
    // Elimina el mensaje anterior
    const mensajesAnteriores = elemento.querySelectorAll(`.${tipo}`);
    mensajesAnteriores.forEach(mensajeAnterior => {
        if(mensajeAnterior.textContent === mensaje) {
            mensajeAnterior.remove();
        }
    });
    
    // Crear la alerta
    const divMensaje = document.createElement('DIV');
    divMensaje.classList.add('px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center', 'border', tipo);
    if(tipo === 'error') {
        divMensaje.classList.add('bg-red-100', 'border-red-400', 'text-red-700');
    } else {
        divMensaje.classList.add('bg-green-100', 'border-green-400', 'text-green-700');
    }

    divMensaje.textContent = mensaje;
    elemento.appendChild(divMensaje);

    setTimeout(() => {
        divMensaje.remove();
    }, 3000);
}