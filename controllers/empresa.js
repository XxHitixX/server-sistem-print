


const getEmpresa = (req, resp) => {
    resp.json({
        msg: 'get todos los Usuario'
    })
}

const postEmpresa = (req, resp) => {
    resp.json({
        msg: 'post de Usuario'
    })
}


const putEmpresa = (req, resp) => {
    resp.json({
        msg: 'put de Usuario'
    })
}

const deleteEmpresa = (req, resp) => {
    resp.json({
        msg: 'delete de Usuario'
    })
}

module.exports = {
    getEmpresa,
    postEmpresa,
    putEmpresa,
    deleteEmpresa
}