export function mostrarAlerta(mensaje, $formulario) {
    const alerta = document.querySelector('.bg-red-100');
    if(!alerta) {
        const alerta = document.createElement('P');
        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');
        alerta.innerHTML = `
            <strong class="font-bold">¡Error!</strong>
            <span class="block sm:inline">${mensaje}</span>
        `;
        
        $formulario.appendChild(alerta);
        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}

export function validarCliente(e, $formulario) {
    e.preventDefault();

    const nombre = $formulario.querySelector('#nombre').value.trim();
    const email = $formulario.querySelector('#email').value.trim();
    const telefono = $formulario.querySelector('#telefono').value.trim();
    const empresa = $formulario.querySelector('#empresa').value.trim();
    const id = $formulario.querySelector('#id').value.trim();

    const cliente = {
        nombre,
        email,
        telefono,
        empresa
    }

    

    if(!validar(cliente)) {
        mostrarAlerta('Todos los campos son obligatorios', $formulario);
        return false;
    }
    id ? cliente.id = id : '';
    return cliente;
}

function validar(obj) {
    return Object.values(obj).every( input => input !== '')
}