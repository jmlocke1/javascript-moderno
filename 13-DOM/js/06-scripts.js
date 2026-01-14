const encabezado = document.querySelector('.contenido-hero h1');

console.log(encabezado);

// encabezado.style.visibility = "hidden"
// console.log(encabezado.innerText); // Si en el CSS - visibility: hidden; no lo va a encontrar
// console.log(encabezado.textContent); // Sí lo va a encontrar
// console.log(encabezado.innerHTML); // Se trae el HTML

const imagen = document.querySelector('.card img');
console.log(imagen);
imagen.src = "img/hacer2.jpg";