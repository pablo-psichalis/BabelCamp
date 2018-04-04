// PROMESAS
const P = require('bluebird')

// Función suma()
// version con promesas
function suma(a, b) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(a + b);
        }, 2000);
    });
}

// ejecucion con promesas
suma(2, 3)
    .then((resultado) => {
        console.log(`Resultado: ${resultado}`);
    })
    .catch((err) => {
        console.error(`Error: ${err}`)
    })


// version con callbacks
function sumaCallback(callback, a, b) {
    setTimeout(() => {
        callback(a + b);
    })
}

// ejecucion con callbacks
sumaCallback(console.log, 6, 4);

// Ejemplo de Promise.all
Promise.all([suma(2, 3), suma(4, 5)])
    .then((result) => {
        console.log(result);
    });

// Ejemplo extra
const array = [[2, 3], [4, 5]];
const promesas = [];
array.forEach((par) => promesas.push(suma(par[0], par[1])));

// Imprimir antes de resolver la promesa (mal!)
console.log(promesas)

// Manera correcta
Promise.all(promesas)
    .then((result) => {
        console.log(result);
    })

// Ejemplo ed Promise.map (utilizando la librería bluebird)
P.map(promesas, (result) => result * 20)
    .then(console.log);


const array2 = [[2, 3], [4, 5]];
console.log(P.map(array2, map));
function map(result) {
    return suma(result[0], result[1])
        .then((result) => {
            return result;
        });
}
