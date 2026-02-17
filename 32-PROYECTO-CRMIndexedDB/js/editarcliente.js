(function() {
    // Obtener la parte de parámetros de la URL actual
    const params = new URLSearchParams(window.location.search);
    const id = Number(params.get('id'));
    let DB;
    const $nombre = document.querySelector('#nombre'),
          $email = document.querySelector('#email'),
          $telefono = document.querySelector('#telefono'),
          $empresa = document.querySelector('#empresa'),
          $id = document.querySelector('#id'),
          $formulario = document.querySelector('#formulario');
          


    document.addEventListener('DOMContentLoaded', () => {
        conectarDB();
        $formulario.addEventListener('submit', validarCliente);
        // if(id) {
        //     setTimeout(() => {
        //         editarCliente(id)
        //     }, 1000);
        // }
    });

    function conectarDB() {
        const abrirConexion = window.indexedDB.open('crm', 1);

        abrirConexion.onerror = function() {
            console.error('Hubo un error al abrir la conexión en EditarCliente');
        };

        abrirConexion.onsuccess = function() {
            DB = abrirConexion.result;
            gestionErroresDB();
            if(id) {
                editarCliente(id);
            } else {
                console.error('No se pudo obtener el id de la url');
            }
        }
    }

    function gestionErroresDB() {
        DB.onerror = e => {
            // Control de errores genérico de la base de datos
            console.error(`Error en la Base de Datos: ${e.target.error?.message}`);
        }
    }

    function editarCliente(id) {
        const transaction = DB.transaction(['crm'], 'readonly');
        const objectStore = transaction.objectStore('crm');
        
        // Obtener cliente con cursor
        // const clienteRequest = objectStore.openCursor(id);
        // clienteRequest.onsuccess = function(e) {
        //     const cursor = e.target.result;
        //     if(cursor) {
        //         console.log(cursor.value);
        //         cursor.continue();
        //     }
            
        // }
        // Obtener cliente con get
        const clienteGet = objectStore.get(id);
        clienteGet.onsuccess = e => {
            llenarFormulario(clienteGet.result);
        }
    }

    function llenarFormulario(cliente) {
        const {id, nombre, email, telefono, empresa} = cliente;
            $nombre.value = nombre;
            $email.value = email;
            $telefono.value = telefono;
            $empresa.value = empresa;
            $id.value = id;
    }

    function validarCliente(e) {
        e.preventDefault();
        
        const clienteActualizado = {
            id: Number($id.value),
            nombre: $nombre.value.trim(),
            email: $email.value.trim(),
            telefono: $telefono.value.trim(),
            empresa: $empresa.value.trim()
        }
        
        for(let campo in clienteActualizado) {
            if(clienteActualizado[campo] === '') {
                imprimirAlerta('Todos los campos son obligatorios', 'error');
                return;
            }
        }
        actualizarCliente(clienteActualizado);
    }

    function actualizarCliente(cliente) {
        const transaction = DB.transaction('crm', 'readwrite');
        const objectStore = transaction.objectStore('crm');
        objectStore.put(cliente);
        transaction.oncomplete = function() {
            formulario.reset();
            console.log('Cliente Actualizado');
            imprimirAlerta('Cliente Actualizado Correctamente', 'exito');
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