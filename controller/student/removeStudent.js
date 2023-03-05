const studentService = require("../../service/studentService")

module.exports = async function (req,res){
    const data = await studentService.removeStudent(req.query.id);
    res.send(data);

}