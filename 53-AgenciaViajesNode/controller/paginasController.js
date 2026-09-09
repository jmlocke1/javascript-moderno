import { Viaje } from "../models/Viaje.js";

const paginaInicio = (req, res) => {
    res.render('inicio', {
        pagina: 'Inicio'
    });
}

const paginaViajes = async (req, res) => {
    // Consultar BD
    const viajes = await Viaje.findAll();

    res.render('viajes', {
        pagina: 'Próximos Viajes',
        viajes
    });
}

// Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {
    const { slug } = req.params;

    try {
        const viaje = await Viaje.findOne({ where : { slug }});

        res.render('viaje', {
            pagina: 'Información Viaje',
            viaje
        });
    } catch (error) {
        console.log(error);
    }
}

const paginaTestimoniales = (req, res) => {
    res.render('testimoniales', {
        pagina: 'Testimoniales'
    });
}

const paginaNosotros = (req, res) => {
    
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}


export {
    paginaInicio,
    paginaViajes,
    paginaTestimoniales,
    paginaNosotros,
    paginaDetalleViaje
}