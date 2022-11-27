const {Model, Schema} = require('mongoose');


const rolSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
})


module.exports = Model('Rol', rolSchema);