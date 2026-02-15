(function() {
    // Obtener la parte de parámetros de la URL actual
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    let DB;

    document.addEventListener('DOMContentLoaded', () => {
        conectarDB();
    });

    function conectarDB() {
        const abrirConexion = window.indexedDB.open('crm', 1);

        abrirConexion.onerror = function() {
            console.error('Hubo un error al abrir la conexión en EditarCliente');
        };

        abrirConexion.onsuccess = function() {
            DB = abrirConexion.result;
            console.log(DB);
            editarCliente();
        }
    }

    function editarCliente() {
        console.log('Editando cliente', id);
    }
})();