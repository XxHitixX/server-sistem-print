const { Schema, model } = require('mongoose');

const productoSchema = Schema({

    nombre: {
        type: String,
    },

    proveedor: {
        type: String,
        default: 'N/A'
    },
    
    stock: {
        type: String,
        default: '1'
    },
    
    costo: {
        type: String,
        required: [true, 'El costo debe ser proveido'],
    },
        
    precio: {
        type: String,
        required: [true, 'El precio debe ser proveido']
    },
        
    estado: {
        type: Boolean,
        required: true,
    },

})

module.exports = model('Producto', productoSchema);