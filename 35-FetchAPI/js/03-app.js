const $cargarJSONArray = document.querySelector('#cargarJSONArray');
$cargarJSONArray.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'data/empleados.json';
    fetch(url)
        .then( respuesta => respuesta.json() )
        .then( resultado => mostrarHTML(resultado) )
}

function mostrarHTML(empleados) {
    const contenido = document.querySelector('.contenido.resultado');
    let html = '<p>__________________________________</p>';
    empleados.forEach(empleado => {
        const { id, nombre, empresa, trabajo } = empleado;
        html += `
            <p>Empleado: ${nombre}</p>
            <p>ID: ${id}</p>
            <p>Empresa: ${empresa}</p>
            <p>Trabajo: ${trabajo}</p>
            <p>__________________________________</p>
        `;
    });
    contenido.innerHTML = html;
}