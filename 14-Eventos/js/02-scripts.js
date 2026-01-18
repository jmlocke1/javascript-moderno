const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children);

// mouseenter detecta cuando entra en el elemento seleccionado, en este caso el nav. No reacciona cuando se entra en los hijos, solo 
// cuando entra en el nav
navegacion.addEventListener('mouseenter', () => {
    console.log('Entrando en la navegación con mouseenter');
});

// mouseover salta cuando entra en cualquiera de los hijos del elemento seleccionado
navegacion.addEventListener('mouseover', () => {
    console.log('Entrando en la navegación con mouseover');
});

// mouseleave detecta cuando sales del elemento seleccionado, en este caso, del nav
navegacion.addEventListener('mouseleave', () => {
    console.log('Saliendo de la navegación con mouseleave');
});

// mouseout detecta cuando sales de cualquiera de los hijos. El margen entre enlaces lo trata como otro hijo
navegacion.addEventListener('mouseout', () => {
    console.log('Se ha producido un mouseout');
});

// mousedown - similar al click, se activa al pulsar el ratón
// click
// dblclick - doble click
// mouseup - se activa al soltar el botón del mouse
