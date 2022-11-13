const { Router } = require('express');
const { getEmpresa, 
        postEmpresa, 
        putEmpresa, 
        deleteEmpresa } = require('../controllers/empresa');

const router = Router();

router.get('/', getEmpresa );
router.post('/', postEmpresa );
router.put('/', putEmpresa );
router.delete('/', deleteEmpresa );



module.exports = router;