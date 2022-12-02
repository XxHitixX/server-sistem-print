const Producto = require('../models/producto');
const Cliente = require('../models/cliente');


const verificarNombre = async( nombre ) => {
    const producto = await Producto.findOne({nombre})

    if( producto ){
        throw new Error(`El producto ${nombre}, ya se encuentra registrado`);
    }

}

const existeIdProducto = async(id) => {
    const producto = await Producto.findById(id);

    if( !producto ){
        throw new Error('No se encontró el producto.');
    }
}

const verificarTelefonoCliente = async( telefono ) => {
    const cliente = await Cliente.findOne({telefono})

    if( cliente ){
        throw new Error(`El cliente con teléfono: ${telefono}, ya se encuentra registrado`);
    }

}

const existeIdCliente = async(id) => {
    const cliente = await Cliente.findById(id);

    if( !cliente ){
        throw new Error('No se encontró el cliente.');
    }
}





module.exports = {
    verificarNombre,
    existeIdProducto,
    verificarTelefonoCliente,
    existeIdCliente
}