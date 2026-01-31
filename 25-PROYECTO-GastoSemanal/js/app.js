// Variables y Selectores
const $formulario = document.querySelector('#agregar-gasto'),
      $gastoListado = document.querySelector('#gastos ul'),
      $total = document.querySelector('#total'),
      $restante = document.querySelector('#restante'),
      $add = document.querySelector('#add'),
      $reset = document.querySelector('button[type="reset"]');
console.log($reset);
let presupuesto;

// Eventos
evenListeners();
function evenListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
    $reset.addEventListener('click', eliminaPresupuesto);
    $add.addEventListener('click', aumentaPresupuesto);
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
    static insertarPresupuesto( cantidad ) {
        const { presupuesto, restante } = cantidad;
        $total.textContent = moneda(presupuesto);
        $restante.textContent = moneda(restante);
    }
    
}

// Instanciar
// const ui = new UI();

// Funciones

function preguntarPresupuesto() {
    let presupuestoUsuario = JSON.parse(localStorage.getItem('presupuesto'));
    
    if(!presupuestoUsuario){

        presupuestoUsuario = prompt('¿Cuál es tu presupuesto?');
        console.log(presupuestoUsuario);
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