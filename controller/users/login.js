const userService = require("../../service/userService")
const bcrypt = require('bcrypt');

module.exports = async function (req,res){
  // const data =  await userService.login(req.query.password);
   const match = await bcrypt.compare(req.query.password, req.query.hash);
   res.send(match);
}