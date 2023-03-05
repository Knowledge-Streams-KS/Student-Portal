const teacherService = require("../../service/teacherService")

module.exports = async function (req,res){
    const data = await teacherService.removeTeacher(req.query.id);
    res.send(data);

}