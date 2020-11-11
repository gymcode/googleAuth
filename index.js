const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const app = express(); 
const PORT = process.env.PORT || 5000;

// body parser
app.use(express.json());

// configuting the env
dotenv.config()

//database stuff
mongoose.connect(
    process.env.DB_CONNECT, 
    {useNewUrlParser: true, useUnifiedTopology: true},
)
        .then(()=> console.log("database connection established successfully"))
        .catch(err => console.error(err))

//models
require('./database/userModel.js')

//imports
const Register = require('./routes/register/register.js')

app.use('/api/auth', Register)

app.listen(PORT, (err)=>{
    if (err) throw err
    console.log(`Server is up and running on port ${PORT}`)
})
