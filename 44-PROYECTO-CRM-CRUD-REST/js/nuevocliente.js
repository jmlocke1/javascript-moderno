import { validarCliente } from "./funciones.js";
import { nuevoCliente } from "./API.js";
(function() {
    const $formulario = document.querySelector('#formulario');
    $formulario.addEventListener('submit', crearCliente);

    function crearCliente(e) {
        const cliente = validarCliente(e, $formulario);
        if(cliente) {
            nuevoCliente(cliente);
            
        }
    }
})();