const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo canción con el id ${id}`),
    pausar: () => console.log(`pausando...`),
    borrar: id => console.log(`Borrando canción ${id}`),
    crearPlayList: nombre => console.log(`Creando PlayList ${nombre}`),
    reproducirPlayList: nombre => console.log(`Reproduciendo PlayList ${nombre}`),
    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion() {
        console.log(`${this.cancion}`);
    }
};

reproductor.nuevaCancion = 'My Way';
reproductor.obtenerCancion;  // Al usar un get no necesitas añadir los paréntesis

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();



reproductor.borrar(20);
reproductor.crearPlayList('Rock Duro');
reproductor.reproducirPlayList('Rock Duro');