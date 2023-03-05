var express = require('express');
var router = express.Router();
const bcrypt= require("bcrypt");

const {createTeacher,getTeacher, getTeacherById,updateTeacher, removeTeacher} = require ("../controller/index");

router.post('/createTeacher', createTeacher);
router.get('/getTeacher', getTeacher);
router.get('/getTeacherById', getTeacherById);
router.put('/updateTeacher', updateTeacher);
router.delete('/removeTeacher', removeTeacher);

module.exports = router;
