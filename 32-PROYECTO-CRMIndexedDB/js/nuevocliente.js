(function() {
    let DB;
    const formulario = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded', () => {
        conectarDB();

        formulario.addEventListener('submit', validarCliente);
    });

    function conectarDB() {
        const abrirConexion = window.indexedDB.open('crm', 1);

        abrirConexion.onerror = function() {
            console.log('Hubo un error al abrir la conexión en NuevoCliente');
        };

        abrirConexion.onsuccess = function() {
            DB = abrirConexion.result;
        }
    }

    function validarCliente(e) {
        e.preventDefault();

        // Leer todos los inputs
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;
        if( nombre === '' || email === '' || telefono === '' || empresa === '' ) {
            imprimirAlerta('Todos los campos son obligatorios', 'error');
            return;
        }

        // Crear un objeto con la información
        const cliente = {
            nombre,
            email,
            telefono,
            empresa,
            id: Date.now()
        }

        crearNuevoCliente(cliente);
    }

    function crearNuevoCliente(cliente) {
        const transaction = DB.transaction('crm', 'readwrite');
        const objectStore = transaction.objectStore('crm');
        objectStore.add(cliente);
        transaction.onerror = function(e) {
            console.error(`Hubo un error al añadir el nuevo cliente: ${e.target.error.message}`);
            imprimirAlerta(`Hubo un error al añadir el nuevo cliente: ${cliente.nombre}`, 'error');
        }

        transaction.oncomplete = function() {
            formulario.reset();
            console.log('Cliente Agregado');
            imprimirAlerta('Cliente Agregado Correctamente', 'exito');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 3000);
        }
    }

    function imprimirAlerta(mensaje, tipo) {
        // Elimina el mensaje anterior
        const mensajesAnteriores = formulario.querySelectorAll(`.${tipo}`);
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
        formulario.appendChild(divMensaje);

        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }
})();