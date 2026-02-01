// Variables y Selectores
const $formulario = document.querySelector('#agregar-gasto'),      
      $gasto = document.querySelector('#gasto'),
      $cantidad = document.querySelector('#cantidad'),
      $total = document.querySelector('#total'),
      $restante = document.querySelector('#restante'),
      $add = document.querySelector('#add'),
      $reset = document.querySelector('button[type="reset"]');

let presupuesto;

// Eventos
evenListeners();
function evenListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
    $reset.addEventListener('click', eliminaPresupuesto);
    $add.addEventListener('click', aumentaPresupuesto);
    $formulario.addEventListener('submit', agregarGasto);
}

// Clases
class Presupuesto {
    constructor(presupuesto) {
        if( !isNaN(presupuesto) ) {
            this.presupuesto = Number(presupuesto);
            this.restante = Number(presupuesto);
            this.gastos = [];
            this.save(); // Guardamos el objeto recién creado en LocalStorage
        } else {
            this.presupuesto = presupuesto.presupuesto;
            this.restante = presupuesto.restante;
            this.gastos = presupuesto.gastos;
        }
        
    }

    nuevoGasto(gasto) {
        this.gastos.push(gasto);
        this.restante -= gasto.cantidad;
        console.log(this);
        this.save();
    }

    aumentaPresupuesto(cantidad) {
        this.presupuesto += Number(cantidad);
        this.restante += Number(cantidad);
        this.save();
    }

    save() {
        // De momento solo se guarda en localStorage
        localStorage.setItem( 'presupuesto', JSON.stringify(this) );
    }
}

class UI {
    static $primario = document.querySelector('.primario');
    static $gastoListado = document.querySelector('#gastos ul');

    static insertarPresupuesto( cantidad ) {
        const { presupuesto, restante, gastos } = cantidad;
        $total.textContent = moneda(presupuesto);
        $restante.textContent = moneda(restante);
        UI.agregarListadoGastos(gastos);
    }
    
    static imprimirAlerta(mensaje, tipo) {
        // Elimina alerta previa;
        const alertaPrevia = document.querySelector('div.alert')
         if(alertaPrevia && alertaPrevia.textContent === mensaje) alertaPrevia.remove();
        // Crear el div
        const divMensaje = document.createElement('DIV');
        divMensaje.classList.add('text-center', 'alert');
        if(tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }
        // Mensaje
        divMensaje.textContent = mensaje;
        // Insertar en el HTML
        UI.$primario.insertBefore( divMensaje, $formulario);
        // Quitar del HTML
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }

    static agregarListadoGastos( gastos ) {
        UI.limpiarListado();
        // Iterar sobre los gastos
        gastos.forEach(gasto => {
            const { cantidad, nombre, id } = gasto;
            // Crear un LI
            const nuevoGasto = document.createElement('LI');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            // nuevoGasto.setAttribute('data-id', id); // En versiones previas de JavaScript
            nuevoGasto.dataset.id = id; // Nueva forma de añadir un atributo personalizado
            
            // Agregar el HTML del gasto
            nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill"> ${moneda(cantidad)} </span>`;

            // Botón para borrar el gasto
            const btnBorrar = document.createElement('BUTTON');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnBorrar.innerHTML = 'Borrar &times;';
            nuevoGasto.appendChild(btnBorrar);

            // Agregar al HTML
            UI.$gastoListado.appendChild(nuevoGasto);
        });
    }

    static limpiarListado() {
        while(UI.$gastoListado.firstChild) {
            UI.$gastoListado.removeChild( UI.$gastoListado.firstChild );
        }
    }
}
function limpiarHTML() {
    // Forma lenta
    // contenedorCarrito.innerHTML = '';
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild( contenedorCarrito.firstChild );
    }
}
// Instanciar
// const ui = new UI();

// Funciones

function preguntarPresupuesto() {
    let presupuestoUsuario = JSON.parse(localStorage.getItem('presupuesto'));
    
    if(!presupuestoUsuario){

        presupuestoUsuario = prompt('¿Cuál es tu presupuesto?');
        
        if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
            window.location.reload();
            return;
        }
    }
    
    
    presupuesto = new Presupuesto(presupuestoUsuario);
    UI.insertarPresupuesto(presupuesto);
}

function aumentaPresupuesto() {
    const presupuestoUsuario = prompt('¿Nueva cantidad para incrementar el presupuesto?');
        
    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
        aumentaPresupuesto();
    } else {
        presupuesto.aumentaPresupuesto(presupuestoUsuario);
        UI.insertarPresupuesto(presupuesto);
    }
}

function eliminaPresupuesto(e) {
    e.preventDefault();
    if(confirm('¿Está seguro de eliminar todos los datos?')){
        localStorage.removeItem('presupuesto');
        window.location.reload();
    }
}

function moneda(cantidad) {
    return new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'EUR', minimumFractionDigits: 2}).format(cantidad);
}

// Añade gastos
function agregarGasto(e) {
    e.preventDefault();

    // Leer los datos del formulario
    const nombre = $gasto.value;
    const cantidad = Number($cantidad.value);

    // Validar
    if(nombre === '' || cantidad === '') {
        UI.imprimirAlerta('Los dos campos tienen que estar llenos', 'error');
        return;
    } else if( cantidad <= 0 || isNaN(cantidad)) {
        UI.imprimirAlerta('Cantidad no válida', 'error');
        return;
    }
    // Generar un objeto con el gasto
    const gasto = { nombre, cantidad, id: Date.now() };
    presupuesto.nuevoGasto(gasto);
    UI.imprimirAlerta('Gasto agregado Correctamente', 'correcto');
    // Imprimir los castos
    UI.insertarPresupuesto( presupuesto );
    $formulario.reset();
}