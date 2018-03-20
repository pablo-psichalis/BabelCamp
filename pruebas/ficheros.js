const fs = require('fs');

const sumas = [];

/* fs.readFile('./prueba.txt', 'utf-8', (err, resultado) => {
    const arr1 = resultado.split(',');
    sumas.push(arr1);
    console.log(sumas);
}) */

function leerFichero(fichero) {
    return new Promise((resolve) => {
        fs.readFile('./prueba.txt', 'utf-8', (err, resultado) => {
            if (err) {
                return reject(err);
            }
            const arr1 = resultado.split(',');
            return resolve(resultado);
        });
    });
}

leerFichero('./prueba.txt')
.then(console.log)
.catch(console.error);