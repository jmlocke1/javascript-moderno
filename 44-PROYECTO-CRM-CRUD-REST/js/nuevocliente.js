(function() {
    const $formulario = document.querySelector('#formulario');
    $formulario.addEventListener('submit', validarCliente);

    function validarCliente(e) {
        e.preventDefault();

        const nombre = document.querySelector('#nombre').value.trim();
        const email = document.querySelector('#email').value.trim();
        const telefono = document.querySelector('#telefono').value.trim();
        const empresa = document.querySelector('#empresa').value.trim();

        const cliente = {
            nombre,
            email,
            telefono,
            empresa
        }

        

        if(validar(cliente)) {
            console.log('Todos los campos son obligatorios');
            return;
        }
        console.log('Sí se pasó la validación');
    }

    function validar(obj) {
        return !Object.values(obj).every( input => input !== '')
    }
})();