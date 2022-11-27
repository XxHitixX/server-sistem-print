const Producto = require('../models/producto');

const getProducto = (req, resp) => {
    resp.json({
        msg: 'get todos los productos producto'
    })
}



const postProducto = async(req, resp) => {

    const { nombre, proveedor, stock, costo, precio, estado } = req.body;


        const producto = new Producto({nombre, proveedor, stock, costo, precio, estado});
        await producto.save();

        const { id, ...resto } = producto;
        
        resp.status(200).json({
            ok: true,
            msg: `Producto ${nombre}, agregado`,
            id,
          })
        
    
}


const putProducto = async(req, resp) => {
    const { id } = req.params;


    const { estado, ...producto } = req.body;

    //Modificar los datos
    const resto = await Producto.findByIdAndUpdate(id, producto);

    resp.json({
        ok: true,
        msg: 'Producto modificado',
        id,
        producto
    })
}

const deleteProducto = async(req, resp) => {
    
    const { id } = req.params;

    const producto = await Producto.findByIdAndUpdate( id, { estado: false });
    const { nombre, ...resto } = producto;
    
    resp.status(200).json({
        ok: true,
        msg: `Producto ${nombre} eliminado`
    })
}

module.exports = {
    getProducto,
    postProducto,
    putProducto,
    deleteProducto
}