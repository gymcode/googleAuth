const jwt = require('jsonwebtoken'); 

function auth(req, res, next){
    //first checking it the token header already exists
    const token = req.header('auth-token'); 
    console.log(token)
    if (!token) return res.status(401).send('Access denied')

    try {
        const tokenVerification = jwt.verify(token, process.env.TOKEN_SECRET)
        if (!tokenVerification) return res.status(403).send('token cannot be found')
        req.auth = tokenVerification;
        next();
    } catch (error) {
        res.status(400).send('invalid token')
    }
}

module.exports = {
    auth
}