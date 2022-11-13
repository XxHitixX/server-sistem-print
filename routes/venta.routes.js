const Router = require('express');
const { getVenta, 
        postVenta, 
        putVenta, 
        deleteVenta } = require('../controllers/venta');

const router = Router();

router.get('/', getVenta);
router.post('/', postVenta);
router.put('/', putVenta);
router.delete('/', deleteVenta);

module.exports = router