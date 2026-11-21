import { generarId } from "./funciones";

export interface Cita {
    [key: string]: string; // Index Signature
    id: string;
    paciente: string;
    propietario: string;
    email: string;
    fecha: string;
    sintomas: string;
}

let editando = {
    value: false
}

// Objeto de Cita
const citaObj: Cita = {
    id: generarId(),
    paciente: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: ''
}

export {
    editando,
    citaObj
}