const request = require('request');
function getUrl(url) {
    return new Promise((resolve, reject) => {
        request(url, (error, response, body) => {
            // error de la request
            if (error) {
                return reject(error);
            }
            // en caso de que no se obtenga respuesta de la request
            if (!response || response.statusCode !== 200) {
                return reject({ error: 'statusCode', code: response.statusCode });
            }
            // en otro caso
            let out;
            try {
                out = resolve(JSON.parse(body));
            } catch (error) {
                return resolve(error);
            }
            return resolve(out);
        });
    });
}

const uriel = 'http://www.mocky.io/v2/5aafa9ca2d00005a006efeff'
// getUrl retorna la promesa
// se parsea con el .then
getUrl(uriel)
    .then((result) => {
        console.log(typeof result);
        console.log(result);
    })
    .catch(console.error);


/* 
request(url, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
 */

