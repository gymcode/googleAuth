// necessary imports
const User = require('../../database/userModel.js');

const getData = (req, res)=>{
    res.send("data comming")
}

const registerUser = async (req, res)=>{

    const user = new User({
        firstname: req.body.firstname, 
        lastname: req.body.lastname, 
        email: req.body.email, 
        password: req.body.password,
    })

    console.log(user)

   try {

    const savedUser = await user.save();
    res.send(savedUser)

   } catch (error) {
        res.send(error)   
   }

}

module.exports = {
    getData, 
    registerUser
}