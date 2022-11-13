const express = require('express');
const cors = require('cors');
const { conectarDB } = require('../db/config');


class Server {


    constructor() {

        this.app = express();
        this.port = process.env.PORT;
        this.path = {
            producto: '/api/producto',
            cliente: '/api/cliente',
            factura: '/api/factura',
            usuario: '/api/usuario',
            venta: '/api/venta'
        }

        //Middlewares
        this.middlewares();

        //Listen
        this.listen();

        //Conexion con BD
        this.conectarBaseDatos();
    }

    async conectarBaseDatos(){
        await conectarDB();
    }

    middlewares(){
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.static('public') );
        
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Corriendo en el puerto: ', this.port);
        })
    }

    rutas(){
        this.app.use( this.path.producto, require('../routes/producto.routes') );
        this.app.use( this.path.cliente, require('../routes/cliente.routes') );
        this.app.use( this.path.factura, require('../routes/factura.routes') );
        this.app.use( this.path.usuario, require('../routes/usuario.routes') )
        this.app.use( this.path.venta, require('../routes/venta.routes') )
    }


}

module.exports = Server;