import express from 'express';
import { 
    paginaInicio, 
    paginaViajes, 
    paginaTestimoniales, 
    paginaNosotros, 
    paginaDetalleViaje 
} from '../controller/paginasController.js';

const router = express.Router();

router.get('/', paginaInicio);

router.get('/viajes', paginaViajes);

router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', paginaTestimoniales);

router.get('/nosotros', paginaNosotros);

export default router;
