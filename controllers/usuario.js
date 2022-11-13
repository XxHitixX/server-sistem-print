


const getUsuario = (req, resp) => {
    resp.json({
        msg: 'get todos los Usuario'
    })
}

const postUsuario = (req, resp) => {
    resp.json({
        msg: 'post de Usuario'
    })
}


const putUsuario = (req, resp) => {
    resp.json({
        msg: 'put de Usuario'
    })
}

const deleteUsuario = (req, resp) => {
    resp.json({
        msg: 'delete de Usuario'
    })
}

module.exports = {
    getUsuario,
    postUsuario,
    putUsuario,
    deleteUsuario
}