var express = require('express');
var router = express.Router();
const bcrypt= require("bcrypt");

const {createStudent,getStudent, getStudentById,updateStudent, removeStudent} = require ("../controller/index");

router.post('/createStudent', createStudent);
router.get('/getStudent', getStudent);
router.get('/getStudentById', getStudentById);
router.put('/updateStudent', updateStudent);
router.delete('/removeStudent', removeStudent);

module.exports = router;
