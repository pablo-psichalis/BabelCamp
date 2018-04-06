function app() {
    let canvas = document.querySelector('canvas');
    let c = canvas.getContext('2d');
    canvas.toDataURL();

    let color_limeGreen = '#00ff00'
    let color_white = '#ffffff';

    c.fillStyle = color_limeGreen;
    c.strokeStyle = color_white;

    //c.strokeRect(98, 98, 202, 202);
    c.fillRect(100, 100, 200, 200);

    c.font = '30px Arial';
    c.strokeText('HOLA JAJAJA', 100, 90);

}

window.addEventListener('load', app);    // esperar a tener acceso al DOM
