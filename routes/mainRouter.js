
// require express
const express = require('express')

// generate router
const mainRouter = express.Router()

// require method from controllers
const { login, home } = require('../controllers/userController')

// require auth middleware
const auth = require('../middleware/auth')

// use method for each url
mainRouter.post('/login', login)

mainRouter.get('/', auth, home)


// module exports
module.exports = mainRouter








