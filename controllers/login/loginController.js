const User = require('../../database/userModel'); 
const bcrypt = require('bcryptjs')

const getlogin = async(req, res)=>{
    res.send("move on bro")
}

const login = async(req, res)=>{
    const {email, password} = req.body
    
}

module.exports = {
    getlogin
}
