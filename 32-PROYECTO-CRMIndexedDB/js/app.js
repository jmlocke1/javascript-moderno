(function() {
    let DB;
    const tabla = document.querySelector('table');
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
            imprimirClientes();
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

    function imprimirClientes() {
        // Leer el contenido de la base de datos
        const objectStore = DB.transaction('crm').objectStore('crm');
        objectStore.openCursor().onsuccess = function(e) {
            const cursor = e.target.result;
            if(cursor) {
                const { nombre, email, telefono, empresa, id } = cursor.value;
                const tr = document.createElement('TR');
                tr.innerHTML = `
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
              <p class="text-sm leading-10 text-gray-700"> ${email} </p>
          </td>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
              <p class="text-gray-700">${telefono}</p>
          </td>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
              <p class="text-gray-600">${empresa}</p>
          </td>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
              <p><a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a></p>
              <p><a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900">Eliminar</a></p>
          </td>
  `;
                tabla.appendChild(tr);
                cursor.continue();
            }
        }
    }

    function limpiarClientes() {
        console.log('Limpiando los clientes anteriores del listado')
    }


})();