const packageModel = require('../models/package.models.js')

function list() {
    return packageModel.list()
}

function create() {
    return packageModel.create();
}

module.exports = {
    list,
}