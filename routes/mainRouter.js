
// require express
const express = require('express')

// generate router
const mainRouter = express.Router()

// require method from controllers
const { login, home } = require('../controllers/userController')

// use method for each url
mainRouter.post('/login', login)

mainRouter.get('/', home)


// module exports
module.exports = mainRouter








