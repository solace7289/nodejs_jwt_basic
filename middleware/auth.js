
const jwt = require('jsonwebtoken')
const { UnauthenticatedError } = require('../errors')

const { JWT_SECRET } = require('../config.json')

const authenticationMiddleware = async (req, res, next) => {

    //get auth header
    const authHeader = req.headers.authorization;
    
    //check token is provided or not
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new UnauthenticatedError('No token provied!')
    }

    // get token 
    const token = authHeader.split(' ')[1]

    // try catch to decode token
    try {
        const decoded = jwt.verify(token, JWT_SECRET)
        const { id, user } = decoded
        req.user = { id, user }

        next()

    } catch (error) {
        throw new UnauthenticatedError(error)
    }
}

module.exports = authenticationMiddleware

