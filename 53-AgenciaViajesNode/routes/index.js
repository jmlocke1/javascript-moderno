import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('inicio', {
        pagina: 'Inicios'
    });
});
router.get('/viajes', (req, res) => {
    res.render('viajes');
});
router.get('/testimoniales', (req, res) => {
    res.render('testimoniales');
});
router.get('/nosotros', (req, res) => {

    const viajes = 'Viaje a Alemania';
    res.render('nosotros', {
        viajes
    });
});
router.get('/contacto', (req, res) => {
    res.send('Contacto');
});

export default router;
