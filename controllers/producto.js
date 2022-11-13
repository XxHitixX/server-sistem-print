


const getProducto = (req, resp) => {
    resp.json({
        msg: 'get todos los productos producto'
    })
}

const postProducto = (req, resp) => {
    resp.json({
        msg: 'post de producto'
    })
}


const putProducto = (req, resp) => {
    resp.json({
        msg: 'put de producto'
    })
}

const deleteProducto = (req, resp) => {
    resp.json({
        msg: 'delete de producto'
    })
}

module.exports = {
    getProducto,
    postProducto,
    putProducto,
    deleteProducto
}