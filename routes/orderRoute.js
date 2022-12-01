const express = require("express");
const router = express.Router();

const controller = require('../controllers/orderController');
const { adminAuthenticateToken } = require("../auth/authentication")

router.post('/create', controller.create)
router.get('/list', controller.getAll)
router.get('/:id', controller.getByid)
router.delete('/delete/:id', controller.delete)
router.put('/edit/:id', controller.edit)

router.get('/order/:id', controller.getByOrderid);

module.exports = router;