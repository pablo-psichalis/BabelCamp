// leer carpetas node_modules  
const fs = require('fs');
const util = require('util')
const fs_readFolder = util.promisify(fs.readdir);
const FOLDER_PATH = '../node_modules'
const readFile = require('./jsoncetes');
const _ = require('lodash')

function getPackagesJson() {
    return getListFolders()
        .then(getPackagesFromList)
        .then(filterPackagesNull)
        .then((data) => console.log(data));
}

function getPackagesFromList(list) {
    const promises = [];
    list.foreach((element, i) => {
        promises.push(resolveVersion(element));
    });
    return Promise.all(promises);
}

function filterPackagesNull(array){
    return _.filter(array, (element) => {
        element !== null
    })
}

function resolveVersion(folder) {
    return getPackageJson(folder);
}

function getListFolders() {
    return fs_readFolder(FOLDER_PATH);
}

getPackagesJson().then(console.log);
module.exports = getPackagesJson;