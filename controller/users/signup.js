const userService = require("../../service/userService")

module.exports = async function (req,res){
  const data = userService.signup(req.body);
   
   res.send(data.password);
}