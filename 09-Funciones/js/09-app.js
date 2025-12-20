const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo canción con el id ${id}`);
    },
    pausar: function() {
        console.log(`pausando...`)
    },
    borrar: function(id) {
        console.log(`Borrando canción ${id}`)
    },
    crearPlayList: function(nombre) {
        console.log(`Creando PlayList ${nombre}`);
    },
    reproducirPlayList: function(nombre) {
        console.log(`Reproduciendo PlayList ${nombre}`)
    }
};

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();



reproductor.borrar(20);
reproductor.crearPlayList('Rock Duro');
reproductor.reproducirPlayList('Rock Duro');