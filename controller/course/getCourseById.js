const courseService = require("../../service/courseService")

module.exports = async function (req,res){
    const data = await courseService.getCourseById(req.query.ids);
    res.send(data);

}