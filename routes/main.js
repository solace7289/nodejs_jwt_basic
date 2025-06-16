
const express = require('express')

const mainRouter = express.Router()

// get method from controller
const { login, dashboard } = require('../controllers/other_main')

// get auth middleware
const authMiddleware = require('../middleware/auth')

// use method
mainRouter.get('/dashboard', authMiddleware, dashboard)
mainRouter.post('/login', login)

// export router
module.exports = mainRouter 



