const joi = require('joi'); 

const registerValidator = (data)=>{

    const sameValidator = joi.string().min(255).required(),

    const schema = {
        firstname: sameValidator,
        lastname: sameValidator,
        username: sameValidator,
        password: sameValidator
    }

    joi.validate(data, schema)
}

module.exports = {
    registerValidator
}