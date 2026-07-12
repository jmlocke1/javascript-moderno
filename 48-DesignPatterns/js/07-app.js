// Namespaces

const restaurantApp = {};

restaurantApp.platillos = [
    {
        platillo: 'Pizza',
        precio: 25
    },
    {
        platillo: 'Hamburguesa',
        precio: 22
    },
    {
        platillo: 'Hot Dog',
        precio: 20
    },
];

restaurantApp.funciones = {
    mostrarMenu: platillos => {
        console.log('Bienvenidos a nuestro menú');

        platillos.forEach((platillo, index) => {
            console.log(`${index} : ${platillo.platillo} $${platillo.precio}`);
        });
    },
    ordenar: id => {
        console.log(`Tu Platillo: ${restaurantApp.platillos[id].platillo} se está preparando`);
    },
    agregarPlatillo: (platillo, precio) => {
        const nuevo = {
            platillo,
            precio
        };

        restaurantApp.platillos.push(nuevo);
    }
}

const { platillos } = restaurantApp;

restaurantApp.funciones.mostrarMenu( platillos );

restaurantApp.funciones.ordenar(1);

restaurantApp.funciones.agregarPlatillo('Taco', 15);