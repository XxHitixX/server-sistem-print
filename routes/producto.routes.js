const { Router } = require('express');
const { getProducto, 
        postProducto, 
        putProducto, 
        deleteProducto } = require('../controllers/producto');

const router = Router();

router.get('/', getProducto );

router.post('/', postProducto );

router.put('/', putProducto );

router.delete('/', deleteProducto );



module.exports = router;