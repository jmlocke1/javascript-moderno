const carDiv = document.querySelector('.card');

carDiv.addEventListener('click', e => {
    if(e.target.classList.contains('titulo')) {
        console.log('Click en título', e.target.textContent);
    }
    if(e.target.classList.contains('precio')) {
        console.log('Click en precio');
    }
    if(e.target.classList.contains('card')) {
        console.log('Click en card');
    }
});