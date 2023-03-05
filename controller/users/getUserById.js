const userService = require("../../service/userService")

module.exports = async function (req,res){
    const data = await userService.getUserById(req.query.ids);
    res.send(data);

}