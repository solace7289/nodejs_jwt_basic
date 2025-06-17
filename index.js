
require('express-async-error')

// require express
const express = require('express')

// require middleware
const notFound = require('./middleware/not_found.js')
const errorHandler = require('./middleware/error_handler.js')

// require mainRouter
const mainRouter = require('./routes/mainRouter.js')

// init app 
const app = express()

// get port from config file 
const { port } = require('./config.json')

app.use(express.json());


// basic get method
app.get('/', (req, res) => {
  res.send(`<h2>BASIC JWT</h2>`)
})

app.use('/api', mainRouter)

// use middleware
app.use(notFound)
app.use(errorHandler)

// main function 
const start = () => {
  try {
    app.listen(port, () => {
      console.log(`App is running at: http://localhost:${port}`)
    })
  } catch (err) {
    console.log(err) 
  }
}

start()




