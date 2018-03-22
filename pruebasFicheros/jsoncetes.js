const fs = require('fs');
const util = require('util');
const path = require('path');      // para resolver paths
const fs_readfile = util.promisify(fs.readFile);

const file = '../node_modules/moment/package.json'

function getPackageJson(nameFolder) {
    const file = `../node_modules/${nameFolder}/package.json`

    return fs_readfile(file, 'utf-8')
        .then(convertStringToJson)
        .then(parserData)
        .catch(() => null);
}

// para limpiar el código de las promises, encapsular
// el contenido de los then en funciones privadas

function convertStringToJson(data) {
    return JSON.parse(data);
}

function parserData(data) {
    return {
        name: _.get(data, 'name'),
        description: data.description,
        version: data.version,
        license: data.license,
    }
}

module.exports = getPackageJson;
