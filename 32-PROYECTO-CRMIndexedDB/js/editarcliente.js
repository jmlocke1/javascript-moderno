(function() {
    // Obtener la parte de parámetros de la URL actual
    const params = new URLSearchParams(window.location.search);
    const id = Number(params.get('id'));
    
    let iteraciones = 0;
    const $nombre = document.querySelector('#nombre'),
          $email = document.querySelector('#email'),
          $telefono = document.querySelector('#telefono'),
          $empresa = document.querySelector('#empresa'),
          $id = document.querySelector('#id'),
          $formulario = document.querySelector('#formulario');
          


    document.addEventListener('DOMContentLoaded', () => {
        conectarDB();
        $formulario.addEventListener('submit', validarCliente);
        
        
        if(id) editarCliente(id);
        // if(id) {
        //     setTimeout(() => {
        //         editarCliente(id)
        //     }, 1000);
        // }
    });

    

function editarCliente(id) {
    if(!DB) {
        console.log("Aún no está la BD en la iteración ", iteraciones++);
        setTimeout(() => {
            editarCliente(id);
        }, 5);
        return;
    }
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
            $formulario.reset();
            console.log('Cliente Actualizado');
            imprimirAlerta('Cliente Actualizado Correctamente', 'exito');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 3000);
        }
    }
})();