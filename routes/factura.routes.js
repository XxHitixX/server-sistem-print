const { Router } = require('express');
const { getFactura, 
        postFactura, 
        putFactura, 
        deleteFactura } = require('../controllers/factura');

const router = Router();

router.get('/', getFactura );
router.post('/', postFactura );
router.put('/', putFactura );
router.delete('/', deleteFactura );



module.exports = router;