const navegacion = document.querySelector('nav.navegacion');

console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);

// console.log(navegacion);
// console.log(navegacion.childNodes); // Los espacios en blanco son considerados elementos
// console.log(navegacion.children); // Los espacios en blanco no son considerados elementos


// console.log(navegacion.children[0].nodeName);
// console.log(navegacion.children[0].nodeType);

const card = document.querySelector('.card');
// card.children[1].children[1].textContent = "Nuevo Heading desde Traversing the DOM";
// card.children[0].src = 'img/hacer3.jpg';
// console.log(card.children[1]);

// Traversing de hijo al padre
// console.log(card.parentElement)

// console.log(card);
// console.log(card.nextElementSibling);
// console.log(card.nextElementSibling.nextElementSibling);

// const ultimoCard = document.querySelector('.card:last-child');
// console.log(ultimoCard);

// const precios = document.querySelectorAll('.card .precio')
// console.log(precios);
// precios.forEach(precio => {
//     precio.textContent = "1200€ por cabeza"
//     console.log(precio);
// });