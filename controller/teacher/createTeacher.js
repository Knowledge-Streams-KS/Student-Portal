const teacherService= require('../../service/teacherService')
const Joi = require('joi');

const {
    StatusCodes,
} = require('http-status-codes');

const schema = Joi.object().keys({
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .required(),
    password: Joi.string().required(),
    phoneNumber: Joi.string().required(),
    firstName : Joi.string().required(),
    lastName: Joi.string().required(),
    role: Joi.string().required(),
    teacherId: Joi.string().required(),
    department: Joi.string().required(),
    officeLocation: Joi.string().required(),
    startTime: Joi.string().required(),
    endTime: Joi.string().required(),
   
});


module.exports = async function(req, res){
    try {
        const validate = await schema.validateAsync(req.body, {
            abortEarly: false,
        });
        
        if (validate.error) {
            res.status(StatusCodes.BAD_REQUEST).send({
                data: {},
                message: err.message,
                error: err.stack,
            });
        }
        
    const data = await teacherService.createTeacher(req.body);
    res.status(StatusCodes.OK)
            .send({ message: 'Success', data, error: {} });
    } catch (err) {
    res.status(StatusCodes.METHOD_NOT_ALLOWED).send({
        data: {},
        message: err.message,
        error: err.stack,
    });
    }
}