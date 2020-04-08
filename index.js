const express = require('express')
const path = require('path')
const routes = require('./routes/index')
const app = express()

// Define Environmental Variables
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT

//Middleware to serve Static Resources
app.use(express.static('public'))

// View Engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//Routes
app.use('/', routes)

// Call the App
app.listen(port, () => console.log(`App Listening on *:` + port))