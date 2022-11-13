const Router = require('express');
const { getUsuario, postUsuario, putUsuario, deleteUsuario } = require('../controllers/usuario');

const router = Router();



router.get('/', getUsuario );

router.post('/', postUsuario );

router.put('/', putUsuario );

router.delete('/', deleteUsuario );


module.exports = router;