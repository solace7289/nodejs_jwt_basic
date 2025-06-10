
const CustomeAPIError = require('./custome-error.js')
const { StatusCodes } = require('http-status-codes')

class UnauthenticatedError extends CustomeAPIError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.UNAUTHORIZED
  }
}

module.exports = UnauthenticatedError









