
require('express-async-error')

// require express
const express = require('express')

// require main router
const { mainRouter } = require('./routes/main.js')

// require middleware
const notFound = require('./middleware/not_found.js')
const errorHandler = require('./middleware/error_handler.js')

// init app 
const app = express()

// get port from config file 
const { port } = require('./config.json')

// // basic get method
// app.get('/', (req, res) => {
//   res.send(`<h2>BASIC JWT</h2>`)
// })

app.use(express.static('./public'))
app.use(express.json())

// use main router
app.use('/api/v1', mainRouter)

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




