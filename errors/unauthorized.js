const CustomeAPIError = require('./custome_error')
const { StatusCodes } = require('http-status-codes')

class Unauthorized extends CustomeAPIError {
    constructor(message) {
        super(message)
        this.statusCode = StatusCodes.UNAUTHORIZED
    }
}

module.exports = Unauthorized



