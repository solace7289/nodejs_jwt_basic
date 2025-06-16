const { CustomeAPIError } = require('../errors')
const { StatusCodes } = require('http-status-codes')

const errorHandler = (err, req, res, next) => {
  console.log(err)
  
  return res.
    status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send(`Something went wrong! Try again later!`)

}   

module.exports = errorHandler
