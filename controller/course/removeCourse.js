const courseService = require("../../service/courseService")

module.exports = async function (req,res){
    const data = await courseService.removeCourse(req.query.id);
    res.send(data);

}