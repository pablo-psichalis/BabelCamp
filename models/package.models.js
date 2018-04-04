const mongoose = require('mongoose');

function list() {
    return Package.find({});
}

const Package = mongoose.model('Package', {
    name: String,
    description: String,
    version: String,
    license: String,
});

function create(pck) {
    return new Package(pck).save()
    .catch((error) => {
        if(error.code === 11000){
            const err = new Error('duplicadisimo');
            err.status = 411;
            throw err;
        }
        throw error;
    })
}