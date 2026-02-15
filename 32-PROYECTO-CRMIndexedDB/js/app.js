(function() {
    let DB;

    document.addEventListener('DOMContentLoaded', () => {
        crearDB();
    });

    function crearDB() {
        const crearDB = window.indexedDB.open('crm', 1);

        crearDB.onerror = function(e) {
            console.log('Hubo un error al crear la base de datos', e);
        }

        crearDB.onsuccess = function(e) {
            DB = crearDB.result;
            console.log('Base de datos creada', e);
        }

        crearDB.onupgradeneeded = function(e) {
            const db = e.target.result;
            const objectStore = db.createObjectStore('crm', {
                keyPath: 'id'
            });
            objectStore.createIndex('nombre', 'nombre', { unique: false });
            objectStore.createIndex('email', 'email', { unique: true });
            objectStore.createIndex('telefono', 'telefono', { unique: false });
            objectStore.createIndex('empresa', 'empresa', { unique: false });
            objectStore.createIndex('id', 'id', { unique: true });

            console.log('DB Lista y Creada', e);
        }
    }
})();