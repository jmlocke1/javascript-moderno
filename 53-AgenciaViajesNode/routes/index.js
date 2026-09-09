import express from 'express';
import { 
    paginaInicio, 
    paginaViajes, 
    paginaTestimoniales, 
    paginaNosotros, 
    paginaDetalleViaje 
} from '../controller/paginasController.js';
import {
    guardarTestimonial
} from '../controller/testimonialControler.js';

const router = express.Router();

router.get('/', paginaInicio);

router.get('/viajes', paginaViajes);

router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimonial);

router.get('/nosotros', paginaNosotros);

export default router;
