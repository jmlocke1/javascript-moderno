
// Constructores
function Seguro(marca, year, tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
    this.marcas = ['Americano', 'Asiático', 'Europeo'];

}

Seguro.prototype.getMarcaTxt = function() {
    return this.marcas[this.marca - 1];
}

// Realiza la cotización con los datos
Seguro.prototype.cotizarSeguro = function() {
    /*
        1 = Americano 1.15
        2 = Asiatico 1.05
        3 = Europeo 1.35
    */
   let cantidad;
   const base = 2000;
    switch (this.marca) {
        case '1':
            cantidad = base * 1.15;
            break;
        case '2':
            cantidad = base * 1.05;
            break;
        case '3':
            cantidad = base * 1.35;
            break;
    
        default:
            break;
    }
    // Leer el año
    const diferencia = new Date().getFullYear() - this.year;
    cantidad -= ((diferencia * 3) * cantidad) / 100;

    /*
        Si el seguro es básico se multiplica por un 30% más
        Si el seguro es completo se multiplica por un 50% más
    */
    if(this.tipo === 'basico') {
        cantidad *= 1.3;
    } else {
        cantidad *= 1.5;
    }
    return Math.round(cantidad);
}

function UI() {}

// Llena las opciones de los años
UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear(),
          min = max - 20;
    const selectYear = document.querySelector('#year');
     let option = document.createElement('OPTION');
     option.value = '';
    option.textContent = '-- Seleccione un año --';
    selectYear.appendChild(option);
    for(let i = max; i > min; i-- ) {
        option = document.createElement('OPTION');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
}

// Muestra alertas en pantalla
UI.prototype.mostrarMensaje = (mensaje, tipo) => {
    if(tipo === 'error' && document.querySelector('div.error')) return;
    if(tipo === 'exito' && document.querySelector('div.correcto')) return;
    const div = document.createElement('DIV');

    if(tipo === 'error') {
        div.classList.add('error');
    } else {
        div.classList.add('correcto');
    }
    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;
    // Insertar en el HTML
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resultado'));

    setTimeout(() => {
        div.remove();
    }, 3000);
}

UI.prototype.mostrarResultado = function(seguro, total) {
    const { year, tipo } = seguro;
    
    this.ocultarCotizacionesPrevias();
    // Crear el resultado
    const div = document.createElement('DIV');
    div.classList.add('mt-10');
    div.innerHTML = `
                    <p class="header">Tu Resumen</p>
                    <p class="font-bold">Marca: <span class="font-normal">$ ${seguro.getMarcaTxt()}</span></p>
                    <p class="font-bold">Año: <span class="font-normal">$ ${year}</span></p>
                    <p class="font-bold">Tipo seguro: <span class="font-normal capitalize">$ ${tipo}</span></p>
                    <p class="font-bold">Total: <span class="font-normal">$ ${total}</span></p>
    `;
    const resultadoDiv = document.querySelector('#resultado');
    

    // Mostrar el Spinner
    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';

    setTimeout(() => {
        spinner.style.display = 'none'; // Se borra el spinner
        resultadoDiv.appendChild(div); // Se muestra el resultado
    }, 3000);
}

UI.prototype.ocultarCotizacionesPrevias = () => {
    const resultados = document.querySelector('#resultado div');
    if(resultados != null) {
        resultados.remove();
    }
}

// Instanciar UI
const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones(); // Llena el select con los años
});

eventListeners();
function eventListeners() {
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
}

function cotizarSeguro(e) {
    e.preventDefault();

    // Leer la marca seleccionada
    const marca = document.querySelector('#marca').value;
    
    // Leer el año seleccionado
    const year = document.querySelector('#year').value;
    
    // Leer el tipo de cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    
    if(marca === '' || year === '' || tipo === '') {
        ui.mostrarMensaje('Todos los campos son obligatorios', 'error');
        return;
    }
    ui.mostrarMensaje('Cotizando...', 'exito');
    
    // Instanciar el seguro
    const seguro = new Seguro(marca, year, tipo);
    const total = seguro.cotizarSeguro();
    // Utilizar el prototype que va a cotizar
    ui.mostrarResultado(seguro, total);
}