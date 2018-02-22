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

const x = new Promise( (resolve, reject) => {
    setTimeout ( () => {resolve()} , 2000 )
} )