const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('use');
    const promise = new Promise((resolve) => resolve('hola'));
    promise.then((result) => {
        req.hola = 'hola'
        next();
    });
})

app.get('/users/:id', (req, res) => {
    console.log('/get');
    console.log(req.params.id)
    return res.json({ user: 'hola'})
});

app.listen(3000, () => console.log('Escuchando en el puerto 3000')); 