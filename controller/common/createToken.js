const commonService = require('../../service/commonService')

module.exports = async function(req,res){
    const data = await commonService.createToken(req.body);
    res.send(data);
}