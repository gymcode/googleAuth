const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose');

// configuting the env
dotenv.config()

//imports
const Register = require('./routes/register/register.js')

const app = express(); 
const PORT = process.env.PORT || 4000;

// body parser
app.use(express.json());

app.use('/api/auth', Register)

//database stuff
mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true, useUnifiedTopology: true}, ()=>{
    console.log("database connection established")
})


app.listen(PORT, (err)=>{
    if (err) throw err
    console.log(`Server is up and running on port ${PORT}`)
})
