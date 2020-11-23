const route = require('express').Router()

const {getData, registerUser} = require('../controllers/register/registerController.js'); 
const {getlogin} = require('../controllers/login/loginController')

route.get('/register', getData)
route.post('/register', registerUser)
route.get('/login', getlogin)

module.exports = route