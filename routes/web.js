const route = require('express').Router()

const {getData, registerUser} = require('../controllers/register/registerController.js'); 
const {getlogin, login} = require('../controllers/login/loginController')

route.get('/register', getData)
route.post('/register', registerUser)
route.get('/login', getlogin)
route.post('/login', login)

module.exports = route