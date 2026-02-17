(function() {
    // Obtener la parte de parámetros de la URL actual
    const params = new URLSearchParams(window.location.search);
    const id = Number(params.get('id'));
    let DB;

    document.addEventListener('DOMContentLoaded', () => {
        conectarDB();
        if(id) {
            setTimeout(() => {
                editarCliente(id)
            }, 1000);
        }
    });

    function conectarDB() {
        const abrirConexion = window.indexedDB.open('crm', 1);

        abrirConexion.onerror = function() {
            console.error('Hubo un error al abrir la conexión en EditarCliente');
        };

        abrirConexion.onsuccess = function() {
            DB = abrirConexion.result;
        }
    }

    function editarCliente(id) {
        console.log('Editando cliente', id);
        const transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');
        console.log('objectStore', objectStore);
        const clienteRequest = objectStore.openCursor(id);
        clienteRequest.onsuccess = function(e) {
            const cursor = e.target.result;
            if(cursor) {
                console.log(cursor.value);
                cursor.continue();
            }
            
        }
        const clienteGet = objectStore.get(id);
        clienteGet.onsuccess = e => {
            console.log(clienteGet.result);
        }
        
    }
})();