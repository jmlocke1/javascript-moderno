// Singleton
let instancia = null;

class Persona {
    constructor(nombre, email) {
        if(!instancia) {
            this.nombre = nombre;
            this.email = email;
            instancia = this;
        }
    }
}

const persona = new Persona('Jose', 'correo@correo.com');
console.log(persona);

const persona2 = new Persona('Karen', 'karen@karen.com');
console.log(persona2);

// Versión con campo estático de clase
class PersonaS {
    static instancia;
    constructor(nombre, email) {
        if(!PersonaS.instancia) {
            this.nombre = nombre;
            this.email = email;
            PersonaS.instancia = this;
        } else {
            return PersonaS.instancia;
        }
    }
}

const persona3 = new PersonaS('Jose', 'correo@correo.com');
console.log(persona3);

const persona4 = new PersonaS('Karen', 'karen@karen.com');
console.log(persona4);