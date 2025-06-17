
// require jsonwebtoken for generate token
const jwt = require('jsonwebtoken')

// require jwt_secret for jwt generate
const { JWT_SECRET } = require('../config.json')

// method login: 
const login = (req, res, next) => {
    // get username and password from request
    const { username, password } = req.body 

    // find, get and check username from database
    if (username !== 'Hson') {
        res.status(500).send('Wrong username or password!')
    }

    console.log(`test username and jwt_secret: ${username} | ${JWT_SECRET} `)

    // generate jwt token base on: username, jwt_secret, expired
    const jwtToken = jwt.sign(
        { username },
        JWT_SECRET,
        { expiresIn: '1d'}
    ) 

    // set response with token
    res.status(200).json({
        message: 'Login successfully!',
        token: jwtToken 
    })
}


const home = (req, res) => {
   res.json({
    message: "this is home page",
    alt: "bla bla"
   }) 
}

module.exports = { login, home }




