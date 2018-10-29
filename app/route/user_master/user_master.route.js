var express = require('express');
var router = express.Router();
var user_master = require('../../controller/user_master/user_master.controller')

router.post('/updateProfile', user_master.updateProfile)
router.get('/selectProfileForEdit/:id', user_master.selectProfileForEdit)

module.exports = router