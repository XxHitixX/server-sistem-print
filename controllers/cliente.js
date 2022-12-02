const Cliente = require("../models/cliente");



const getCliente = async(req, res) => {

    const { limite, desde } = req.query;

    const [total, cliente] = await Promise.all([
        Cliente.countDocuments({ estado: true }),
        Cliente.find({ estado: true })
            .limit(Number(limite))
            .skip(Number(desde))
    ])

    res.json({
        total,
        cliente,
        ok: true
    })

}

const getClientebyId = async(req, res) => {

    const { id } = req.params;
    
    const cliente = await Cliente.findById(id);
    console.log(cliente);
    
    res.json({
        ok: true,
        cliente
    })

}

const postCliente = async(req, resp) => {
    
    const { nombre, telefono, cedula, correo, direccion } = req.body;
    
    const cliente = new Cliente({nombre, telefono, cedula, correo, direccion})
    
    await cliente.save();
    const { id, ...resto } = cliente;

    resp.json({
        ok: true,
        id,
        msg: 'Cliente creado'
    })
}


const putCliente = async(req, resp) => {
    const { id } = req.params;


    const { estado, ...cliente } = req.body;

    //Modificar los datos
    await Cliente.findByIdAndUpdate(id, cliente);

    resp.json({
        ok: true,
        msg: 'Cliente modificado',
        id,
        cliente
    })

}

const deleteCliente = async(req, resp) => {
    const { id } = req.params;

    const cliente = await Cliente.findByIdAndUpdate( id, { estado: false });
    const { nombre, ...resto } = cliente;
    
    resp.status(200).json({
        ok: true,
        msg: `Cliente ${nombre} eliminado`
    })
}

module.exports = {
    getCliente,
    postCliente,
    putCliente,
    deleteCliente,
    getClientebyId
}