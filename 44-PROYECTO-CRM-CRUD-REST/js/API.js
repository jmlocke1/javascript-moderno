const url = 'http://localhost:3000/clientes';

// Creación de un nuevo cliente
export const nuevoCliente = async cliente => {
    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify( cliente ),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html';
    } catch (error) {
        console.error(error);
    }
};

// Obtine todos los clientes
export const obtenerClientes = async () => {
    try {
        const resultado = await fetch(url + '?_sort=nombre');
        const clientes = await resultado.json();
        return clientes;
    } catch (error) {
        console.error(error)
    }
};

export const obtenerCliente = async id => {
    try {
        const resultado = await fetch( `${url}/${id}`);
        const cliente = await resultado.json();
        return cliente;
    } catch (error) {
        console.error(error);
    }
}

// Elimina un cliente
export const eliminarCliente = async id => {
    try {
         const resultado = await fetch( `${url}/${id}`, {
            method: 'DELETE',
            'Content-Type': 'text/xml'
         });
    } catch (error) {
        console.error(error);
    }
};

export const editarCliente = async cliente => {
    try {
        await fetch(`${url}/${cliente.id}`, {
            method: 'PUT',
            body: JSON.stringify(cliente),
            'Content-Type': 'application/json'
        });
        window.location.href = 'index.html';
    } catch (error) {
        console.error(error);
    }
}