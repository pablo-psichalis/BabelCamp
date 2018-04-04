// Versión en TypeScript de @Github/Curso_Babel/JS/clases.js

interface FullNameInterface {
    nombre: string;
    apellidos: string;
}    // no se define el ámibto de los atributos de las interfaces
    // ya que siempre son public

class FullNameClass {
    constructor(
        public nombre: string,
        public apellidos: string,
    ) {}
}

class User {

/*     public nombre: string;
    private apellidos: string;
    private edad: number;
    private genero: any;     // public por defecto

    constructor  (nombre, apellidos, edad, genero) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.genero = genero;
    } */

    constructor (
        public fullName: FullNameInterface,
        public fullNameCl: FullNameClass,
        private genero: string
    ) {}

    saludar () {
        console.log (` Hola, soy ${this.fullName.nombre}
        ya somos muchos`);
    }
}


/* class Alumno extends User {
    constructor(nombre, apellidos, edad, genero, curso) {
        super(nombre, apellidos, edad, genero);
         this.curso = curso;
    }

    saludar () {
        console.log (` Hola, soy ${this.fullName.nombre}
        ya somos bastantes`);
    }
} */

let oUser1 = new User( {nombre: 'Juan', apellidos: 'Lopez'},
                    {nombre: 'Juan', apellidos: 'Lopez'}, 'H');
// oUser1.saludar();
console.log(oUser1);

/*
oAlumno1 = new Alumno ("Felipe", "Martinez", 33, "H", "Angular");
oAlumno1.notas = [9, 8, 10];
oAlumno1.saludar();
console.log(oAlumno1);

oAlumno2 = new Alumno ("Luis", "Gomez", 33, "H", "Angular");
console.log(oAlumno2); */
