
// require jsonwebtoken
const jwt = require('jsonwebtoken')

// require JWT_SECRET
const { JWT_SECRET } = require('../config.json')
const e = require('express')

// method auth
const authenticationMiddleware = (req, res, next) => {
    // get token from header
    const headerToken = req.headers.authorization

    // check token 
    if (!headerToken || !headerToken.startsWith('Bearer ')) {
        // throw exception
        console.log('Error at token validate!')
    }

    // split header to get token only
    const token = headerToken.split(' ')[1]

    // try: decoded token
    try {
        const decoded = jwt.verify(token, JWT_SECRET)
        const { username } = decoded
        req.user = { username }

        // log message
        console.log(` token has been decoded: username: ${username}`)
        next()
    } catch(err) {
        console.log(err)
    }

}

// module exports
module.exports = authenticationMiddleware





