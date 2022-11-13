const { Router } = require('express');
const { getCliente, 
        postCliente, 
        putCliente, 
        deleteCliente } = require('../controllers/cliente');

const router = Router();

router.get('/', getCliente );
router.post('/', postCliente );
router.put('/', putCliente );
router.delete('/', deleteCliente );



module.exports = router;