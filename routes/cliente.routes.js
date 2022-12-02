const { Router } = require('express');
const { getCliente, 
        postCliente, 
        putCliente, 
        deleteCliente, 
        getClientebyId} = require('../controllers/cliente');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/verificar-campos');
const { verificarTelefonoCliente, existeIdCliente } = require('../helpers/validadores');

const router = Router();


router.get('/', getCliente );

router.get('/:id', [
        check('id', 'No es un id válido').isMongoId(),
        check('id', 'Debe proveerse el identificador del cliente').not().isEmpty(),
        check('id').custom( existeIdCliente ),
        validarCampos
],getClientebyId );

router.post('/', [
        check('nombre', 'El campo es requerido').not().isEmpty(),
        check('nombre', 'El nombre debe tener minimo 3 caracteres').isLength({min:3}),
        check('cedula', 'La cedula solo admite numeros').not().isEmpty(),
        check('correo', 'El correo debe ser válido').isEmail(),
        check('correo', 'El correo es requerido').not().isEmpty(),
        check('direccion', 'El campo es obligatorio').not().isEmpty(),
        check('telefono', 'El telefono debe ser proveido').not().isEmpty(),
        check('telefono').custom( verificarTelefonoCliente ),
        validarCampos
],postCliente );

router.put('/:id', [
        check('id', 'Debe ser un id válido').isMongoId(),
        check('id', 'Debe proveerse el identificador del cliente').not().isEmpty(),
        check('id').custom(existeIdCliente),
        validarCampos
],putCliente );

router.delete('/:id', [
        check('id', 'No es un ID válido').isMongoId(),
        check('id', 'Debe proveerse el identificador del Cliente').not().isEmpty(),
        check('id').custom( existeIdCliente ),
        validarCampos ] ,deleteCliente );




module.exports = router;