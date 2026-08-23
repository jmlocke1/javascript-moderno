import  Citas from '../js/classes/Citas';

describe('Probar la clase de Citas', () => {

    const cita = new Citas();
    const id = 1787521776980;
    test('Agregar una nueva cita', () => {
        const citaObj = {
            mascota: 'Hook',
            propietario: 'José Miguel',
            telefono: '6666666',
            fecha: '23/08/2026',
            hora:'10:30',
            sintomas: 'Solo duerme'
        }

        citaObj.id = id;

        cita.agregarCita(citaObj);

        // Prueba
        expect(cita).toMatchSnapshot();
    });

    test('Actualizar cita', () => {
        const citaActualizada = {
            id,
            mascota: 'Billie',
            propietario: 'José Miguel',
            telefono: '6666666',
            fecha: '23/08/2026',
            hora:'10:30',
            sintomas: 'Solo duerme'
        }

        cita.editarCita(citaActualizada);

        expect(cita).toMatchSnapshot();
    });

    test('Eliminar Cita', () => {
        cita.eliminarCita(id);

        expect(cita).toMatchSnapshot();
    });
});