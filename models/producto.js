const { Schema, Model } = require('mongoose');

const productoSchema = Schema({

    nombre: {
        type: String,
        required: true,
    },

    proveedor: {
        type: String,
        required: true,
        default: 'N/A'
    },
    
    stock: {
        type: String,
        required: true,
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
        default: false
    },

})

module.exports = Model('Producto', productoSchema);