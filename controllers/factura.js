


const getFactura = (req, resp) => {
    resp.json({
        msg: 'get todos los Factura'
    })
}

const postFactura = (req, resp) => {
    resp.json({
        msg: 'post de Factura'
    })
}


const putFactura = (req, resp) => {
    resp.json({
        msg: 'put de Factura'
    })
}

const deleteFactura = (req, resp) => {
    resp.json({
        msg: 'delete de Factura'
    })
}

module.exports = {
    getFactura,
    postFactura,
    putFactura,
    deleteFactura
}