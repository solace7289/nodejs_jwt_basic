

const errorHandler = (err, req, res, next) => {
  console.log(err)

  res.status(400).send(`Something went wrong! Try again later!`)

}


module.exports = errorHandler
