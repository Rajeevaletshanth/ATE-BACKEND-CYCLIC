const express = require("express");
const router = express.Router();

const controller = require('../controllers/productController');
const {adminAuthenticateToken} = require("../auth/authentication")

router.post('/create', controller.create)
router.get('/list', controller.getAll)
router.get('/:id', controller.getByid)
router.delete('/delete/:id', controller.delete)
router.put('/edit/:id', controller.edit)

router.get('/product/:id', controller.getProductByid)
router.get('/combo/:id', controller.getComboMenuPack)

router.get('/kitchen/:id', controller.getProductByKitchen)


module.exports = router;