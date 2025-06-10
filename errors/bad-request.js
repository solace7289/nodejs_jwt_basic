
const CustomeAPIError = require('./custome-error.js')
const { StatusCodes } = require('http-status-codes')

class BadRequest extends CustomeAPIError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.BAD_REQUEST
  }
}

module.exports = BadRequest





