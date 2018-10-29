var express = require('express');
var router = express.Router();
var auth = require('../../controller/auth/auth.controller')

router.post('/login', auth.login)
router.post('/register', auth.register)
router.post('/checkAnswar', auth.checkAnswar)

module.exports = router