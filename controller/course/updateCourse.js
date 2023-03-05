const courseService = require("../../service/courseService")

module.exports = async function (req,res){
    const data = await courseService.updateCourse(req.body);
    res.send(data);

}