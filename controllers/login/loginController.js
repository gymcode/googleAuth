const User = require('../../database/userModel'); 
const bcrypt = require('bcryptjs')
const {loginCheck} = require('../../validation/validator');

const getlogin = async(req, res)=>{
    res.send("move on bro")
}

const login = async(req, res)=>{
    const {email, password} = req.body

    //validation check
    const {error, message} = loginCheck(...req.body)
    if (error) {
        return res.status(406).send({
            status: "error", 
            errorMessage: message
        })
    }
}

module.exports = {
    getlogin
}