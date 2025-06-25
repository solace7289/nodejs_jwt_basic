// require custome api error
const CustomeAPIError = require('./custome_error')

// require http code
const { StatusCodes } = require('http-status-codes')

// class bad request extends custome api error with a status code of bad request
class BadRequest extends CustomeAPIError {
    constructor(message) {
        super(message)
        this.statusCode = StatusCodes.BAD_REQUEST
    }
}

//export
module.exports = BadRequest



