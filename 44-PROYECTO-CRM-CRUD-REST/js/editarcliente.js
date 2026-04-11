import { editarCliente, obtenerCliente } from "./API.js";
import { validarCliente } from "./funciones.js";

(function() {
    const $formulario = document.querySelector('#formulario');
    document.addEventListener('DOMContentLoaded', async () => {
        const $nombre = document.querySelector('#nombre'),
              $email = document.querySelector('#email'),
              $telefono = document.querySelector('#telefono'),
              $empresa = document.querySelector('#empresa'),
              $id = document.querySelector('#id');

        const parametrosURL = new URLSearchParams(window.location.search);
        const id = parametrosURL.get('id');
        const cliente = await obtenerCliente(id);
        const { nombre, email, telefono, empresa } = cliente;
        $nombre.value = nombre;
        $email.value = email;
        $telefono.value = telefono;
        $empresa.value = empresa;
        $id.value = id;
        $formulario.addEventListener('submit', editado);

    });

    function editado(e) {
        const cliente = validarCliente(e, $formulario);
        if(cliente) {
            editarCliente(cliente);
        }
    }
})();