const route = require('express').Router()

const {getData, registerUser} = require('../../controllers/register/registerController.js')

route.get('/register', getData)
route.post('/register', registerUser)

module.exports = route