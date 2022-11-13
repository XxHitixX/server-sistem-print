


const getCliente = (req, resp) => {
    resp.json({
        msg: 'get todos los Cliente'
    })
}

const postCliente = (req, resp) => {
    resp.json({
        msg: 'post de Cliente'
    })
}


const putCliente = (req, resp) => {
    resp.json({
        msg: 'put de Cliente'
    })
}

const deleteCliente = (req, resp) => {
    resp.json({
        msg: 'delete de Cliente'
    })
}

module.exports = {
    getCliente,
    postCliente,
    putCliente,
    deleteCliente
}