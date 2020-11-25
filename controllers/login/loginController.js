const User = require('../../database/userModel'); 
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const {loginCheck} = require('../../validation/validator');

const getlogin = async(req, res)=>{
    res.send("move on bro")
}

const login = async(req, res)=>{
    const {email, password} = req.body;

    // checking is the user is already in the database
    const checkUser = await User.findOne({email})
    if (!checkUser) res.status(403).send({status: "error", errorMessage: "User does not exist int he database" })

    //comparing the user password
    const passwordCompare = await bcrypt.compare(password, checkUser.password)
    if(!passwordCompare) res.status(400).send({status: "error", errorMessage: "password does not match up"})

    // generating the web token 
    const token = jwt.sign({
        id: checkUser._id, 
        firstname: checkUser.firstname, 
        email: checkUser.email 
    }, process.env.TOKEN_SECRET);

    res.header('auth-token', token)
        .status(200)
        .json({
            status: "success", 
            message: "your are logged in bro", 
            data: checkUser,
            token
        })

}

module.exports = {
    getlogin,
    login
}