const mongoose = require('mongoose');


const conectarDB = async() => {
    try {
        await mongoose.connect(process.env.DB_CNN);
        console.log('Base de datos online');
    } catch (error) {
        throw new Error('No se pudo conectar con la base de datos.')
    }
}

module.exports = {
    conectarDB
}