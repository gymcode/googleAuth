const route = require('express').Router()

const {getData, registerUser} = require('../controllers/register/registerController.js'); 
const {getlogin, login} = require('../controllers/login/loginController');
const { postController } = require('../controllers/posts/post.js');


// authentication
route.get('/register', getData)
route.post('/register', registerUser)
route.get('/login', getlogin)
route.post('/login', login)

// other routes
route.get('/posts', postController)

module.exports = route