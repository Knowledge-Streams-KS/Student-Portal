const userService = require("../../service/userService")

module.exports = async function (req,res){
    const data = await userService.getUser(req.body);
    res.send(data);

}