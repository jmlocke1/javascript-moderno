// Variables y Selectores
const $formulario = document.querySelector('#agregar-gasto'),      
      $gasto = document.querySelector('#gasto'),
      $cantidad = document.querySelector('#cantidad'),
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

    get gastado() {
        // return this.presupuesto - this.restante;
        return this.gastos.reduce( (total, gasto) => total + gasto.cantidad, 0);
    }

    nuevoGasto(gasto) {
        if(gasto.cantidad > this.restante) return false;
        this.gastos.push(gasto);
        // this.restante -= gasto.cantidad; // Solución mía
        this.calcularRestante();
        this.save();
        return true;
    }

    eliminarGasto(id) {
        this.gastos = this.gastos.filter( gasto => gasto.id !== id);
        this.calcularRestante();
        this.save();
    }

    calcularRestante() {
        this.restante = this.presupuesto - this.gastado;
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

    static restore() {
        let presupuestoAlmacenado = JSON.parse(localStorage.getItem('presupuesto'));
        if(presupuestoAlmacenado) {
            // Si hay datos guardados en localStorage, devolvemos un objeto Presupuesto
            return new Presupuesto(presupuestoAlmacenado);
        } else {
            // Si no hay datos, devolvemos una cadena vacía
            return '';
        }
    }
}

class UI {
    static $primario = document.querySelector('.primario');
    static $listadoGastos = document.querySelector('#gastos ul');
    static $total = document.querySelector('#total');
    static $gastado = document.querySelector('#gastado');
    static $restante = document.querySelector('#restante');

    static insertarPresupuesto( presupuestoObj ) {
        const { presupuesto, gastado, restante, gastos } = presupuestoObj;
        UI.$total.textContent = moneda(presupuesto);
        UI.$gastado.textContent = moneda(gastado);
        UI.$restante.textContent = moneda(restante);
        UI.agregarListadoGastos(presupuestoObj);
        UI.comprobarPresupuesto(presupuestoObj);
    }

    static comprobarPresupuesto(presupuestoObj) {
        const { presupuesto, restante } = presupuestoObj;
        const $restanteDiv = UI.$restante.parentElement.parentElement;
        if( (presupuesto / 4) > restante ) {
            $restanteDiv.classList.remove('alert-success', 'alert-warning');
            $restanteDiv.classList.add('alert-danger');
        } else if( (presupuesto / 2) > restante ){
            $restanteDiv.classList.remove('alert-success', 'alert-danger');
            $restanteDiv.classList.add('alert-warning');
        } 
        else {
            $restanteDiv.classList.add('alert-success');
            $restanteDiv.classList.remove('alert-danger', 'alert-warning');
        }
        // Si el total es 0 o menor
        const $submit = $formulario.querySelector('button[type="submit"]');
        
        if(restante <= 0) {
            UI.imprimirAlerta('El presupuesto se ha agotado', 'error');
            $submit.disabled = true;
        } else {
            $submit.disabled = false;
        }
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

    static agregarListadoGastos( presupuesto ) {
        const { gastos } = presupuesto;
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
            btnBorrar.onclick = () => {
                presupuesto.eliminarGasto(id);
                UI.insertarPresupuesto(presupuesto);
            }
            nuevoGasto.appendChild(btnBorrar);

            // Agregar al HTML
            UI.$listadoGastos.appendChild(nuevoGasto);
        });
    }

    static limpiarListado() {
        while(UI.$listadoGastos.firstChild) {
            UI.$listadoGastos.removeChild( UI.$listadoGastos.firstChild );
        }
    }
}


// Funciones

function preguntarPresupuesto() {
    let presupuestoUsuario;
    presupuesto = Presupuesto.restore();
    
    if(!presupuesto){

        presupuestoUsuario = prompt('¿Cuál es tu presupuesto?');
        
        if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
            window.location.reload();
            return;
        }
        presupuesto = new Presupuesto(presupuestoUsuario);
    }
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
    if(presupuesto.nuevoGasto(gasto)) {
        UI.imprimirAlerta('Gasto agregado Correctamente', 'correcto');
        // Imprimir los gastos
        UI.insertarPresupuesto( presupuesto );
    } else {
        UI.imprimirAlerta('El gasto excede el presupuesto', 'error');
    }
    $formulario.reset();
    $gasto.focus(); // Lleva el cursor a la celda gasto, para facilitar la entrada
}