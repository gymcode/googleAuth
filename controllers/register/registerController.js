// necessary imports
const User = require('../../database/userModel.js');
const bcrypt = require('bcryptjs'); 

const { validationCheck } = require('../../validation/validator.js')

const getData = (req, res)=>{
    res.send("data comming")
}

const registerUser = async (req, res)=>{
    const {firstname, lastname, username, password} = req.body;

    // validation check
    const {error, message} =  validationCheck({...req.body}, res)
    if (error) {
       return res.status(406).send({
            status: "error", 
            errorMessage: message
        })
    }

    const DEFAULTGMAIL = "@gmail.com";
    const EMAIL = username + DEFAULTGMAIL;

    // const passwordRegex = "/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{8,32}$/"
    // if (password.match(passwordRegex)) {
    //     return console.log("password error")
    // }

    // checking if the user already exists in the database
    const indUser = await User.findOne({email: EMAIL})
    if (indUser) {
       return res.status(401).send({
            status: "error", 
            errorMessage: "User already exists in the database try another username"
        })
    }    

    const genSalt = await bcrypt.genSalt(10); 
    const hashedPassword = await bcrypt.hash(password, genSalt);
    
    const user = new User({
        firstname,
        lastname,
        email: EMAIL,
        password: hashedPassword
    })

   try {
    const savedUser = await user.save();
    res.status(400).send({
        status: 'success',
        error: false,
        data: savedUser
    })

   } catch (error) {
        res.status(400).send({
            error: true, 
            message: error
        })
   }

}

module.exports = {
    getData, 
    registerUser
}