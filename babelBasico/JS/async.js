// Asincronía

// Eventos de usuario
// Datos del servidor
// Temporización

let x = 12
setTimeout( () => {
    console.log(`Hola, soy asíncrono`)
    x *= 2
} , 1000 )

console.log(x)

// En ES6

const consulta = function() {
    return new Promise( (resolve, reject) => {
        setTimeout ( () => {resolve("Todo OK")} , 2000 )
    } )
}

let resultados = consulta()
.then( (res) => {console.log(res)} )