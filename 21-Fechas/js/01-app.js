const diaHoy = new Date();

let valor;

// Año
valor = diaHoy.getFullYear();
// Mes, en número. Los meses empiezan en cero
valor = diaHoy.getMonth();
// Minutos
valor = diaHoy.getMinutes();
// Horas
valor = diaHoy.getHours();
// Milisegundos desde el 1 de enero de 1970
valor = diaHoy.getTime();
// Milisegundos desde el 1 de enero de 1970. No requiere instanciarse
valor = Date.now();

console.log(valor);