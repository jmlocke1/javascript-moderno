// const carDiv = document.querySelector('.card');
// const infoDiv = document.querySelector('.info');
// const titulo = document.querySelector('.titulo');
// const imagen = document.querySelector('.card img');

// carDiv.addEventListener('click', e => {
//     e.stopPropagation();
//     console.log('click en card');
// });

// infoDiv.addEventListener('click', e => {
//     e.stopPropagation();
//     console.log('click en info');
// });

// titulo.addEventListener('click', e => {
//     e.stopPropagation();
//     console.log('click en título');
// });

// imagen.addEventListener('click', e => {
//     e.stopPropagation();
//     console.log('click en imagen');
// });
const titulo = document.querySelector('.titulo');
console.log(titulo);
const cards = document.querySelectorAll('.card');
console.log(cards);
cards.forEach(carDiv => eventosCard(carDiv));

function eventosCard(carDiv) {
    const imagen = carDiv.children[0];
    const infoDiv = carDiv.children[1];
    const titulo = carDiv.children[1].children[1];
    if(!titulo) return;
    const titText = titulo.textContent;
    carDiv.addEventListener('click', e => {
        e.stopPropagation();
        console.log('click en card', titText);
    });

    infoDiv.addEventListener('click', e => {
        e.stopPropagation();
        console.log('click en info', titText);
    });

    titulo.addEventListener('click', e => {
        e.stopPropagation();
        console.log('click en título', titText);
    });

    imagen.addEventListener('click', e => {
        e.stopPropagation();
        console.log('click en imagen', titText);
    });
}

