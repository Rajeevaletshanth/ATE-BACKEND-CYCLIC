const express = require("express");
const router = express.Router();

const controller = require('../controllers/kitchenController');
const {adminAuthenticateToken} = require("../auth/authentication")
const {kitchenAuthenticateToken} = require("../auth/kitchen_authentication")


router.post('/register', controller.register)
router.post('/login', controller.login)
router.get('/:id', kitchenAuthenticateToken, controller.getByid)
router.get('/list', adminAuthenticateToken, controller.getAll)
router.post('/get_admin', adminAuthenticateToken, controller.getByEmail)
router.put('/edit/:id', kitchenAuthenticateToken, controller.editProfile)
router.post('/forgot_password', controller.forgot_password)
router.put('/change_password/:id', kitchenAuthenticateToken, controller.change_password)
router.post('/reset_password/:id/:token', controller.reset_password)
router.put('/access_control/:id', adminAuthenticateToken, controller.access_control)
router.delete('/delete/:id', kitchenAuthenticateToken, controller.delete)

module.exports = router;