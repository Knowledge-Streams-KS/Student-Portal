var express = require('express');
var router = express.Router();
const bcrypt= require("bcrypt");

const {login,logout} = require ("../controller/index");

router.post('/login', login);
router.post('/logout', logout);


module.exports = router;
