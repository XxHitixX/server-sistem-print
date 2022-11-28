const { Router } = require('express');

const { getProducto, 
        postProducto, 
        putProducto, 
        deleteProducto, 
        getProductobyId} = require('../controllers/producto');
const { check } = require('express-validator')

const { validarCampos } = require('../middlewares/verificar-campos');
const { verificarNombre, existeIdProducto } = require('../helpers/validadores');


const router = Router();

router.get('/', getProducto );

router.get('/:id', [
        check('id', 'No es un id válido').isMongoId(),
        check('id', 'Debe proveerse el identificador del producto').not().isEmpty(),
        check('id').custom( existeIdProducto ),
        validarCampos
],getProductobyId );

router.post('/', [
        check('nombre', 'El campo nombre es requerido').not().isEmpty(),
        check('nombre').custom(verificarNombre),
        check('proveedor', 'El proveedor es requerido').not().isEmpty(),
        check('stock', 'El stock es requerido y debe ser un número').isNumeric(),
        check('costo', 'El costo es requerido y debe ser un número').isNumeric(),
        check('precio', 'El precio es requerido y debe ser un número').isNumeric(),
        check('estado', 'El estado es requerido y debe ser un boolean').isBoolean(),
        validarCampos        
], postProducto );

router.put('/:id',  [
        check('id', 'No es un id válido').isMongoId(),
        check('id', 'Debe proveerse el identificador del producto').not().isEmpty(),
        check('id').custom( existeIdProducto ),
        validarCampos
],putProducto );

router.delete('/:id', [
        check('id', 'No es un ID válido').isMongoId(),
        check('id', 'Debe proveerse el identificador del producto').not().isEmpty(),
        check('id').custom( existeIdProducto ),
        validarCampos ] ,deleteProducto );



module.exports = router;