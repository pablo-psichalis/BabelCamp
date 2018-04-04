const oUserLit = {
    nombre : "Pepe",
    apellido : "Perez",
    edad : 23,
    genero : "H",
    saludar : function() {
        console.log(`Hola, soy ${this.nombre} desde el objeto :^)`)
    }
}

function User (nombre, apellido, edad, genero) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.genero = genero
    function saludar(){
        console.log(`Hola, soy ${this.nombre} desde la función ;)`)
    }
}

var mostrarA1 = pData => console.log (this)

// Formas de invocación
mostrarA1();
/* console.log();
new User();
 */

 oUser = new User("Borja", "Sanchez", 21, "H")
 console.log(oUser)
 console.log(oUserLit)

 console.log(typeof oUser)
 console.log(typeof oUserLit)

 console.log(oUserLit.saludar())

 Array.prototype.saludar = function() {
     console.log (`Hola, soy un array juejue`)
 }