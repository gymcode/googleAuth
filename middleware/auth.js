const jwt = require('jsonwebtoken'); 

function auth(req, res, next){
    //first checking it the token header already exists
    const token = req.header('auth-token'); 
    if (!token) return res.stauts(401).send('Access denied')

    try {
        const tokenVerification = jwt.verify(token, process.env.TOKEN_SECRET)
        if (tokenVerification) return res.status(403).send('token cannot be found')
        req.user = tokenVerification
    } catch (error) {
        res.status(400).send('invalid token')
    }
}

module.exports = {
    auth
}