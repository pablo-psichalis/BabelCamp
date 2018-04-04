// Solo en ES6
// Esto es de mentirijillas

class User{
    
    constructor(nombre, apellido, edad, genero) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.genero = genero
    }

    saludar() {
        console.log(`Hola soy ${this.nombre} xdxd`)
    }
}

oUser = new User("Borja", "Sanchez", 21, "H")
oUser.saludar()
console.log(oUser)


class Alumno extends User {
    constructor(nombre, apellido, edad, genero, curso) {
        super(nombre, apellido, edad, genero)
        this.curso = curso
    }

    saludar() {
        console.log(`Hola soy ${this.nombre},
        aspiro a ser un puto crack en ${this.curso}`)
    }
}

oAlumno = new Alumno("Iñigo", "Baca", 19, "H", "Angular")
oAlumno.saludar()