const Producto = require('../models/producto')


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




module.exports = {
    verificarNombre,
    existeIdProducto,
}