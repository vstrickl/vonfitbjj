const express = require('express')
var routersConfig = require('./routes/routers')
const app = express()

// Define Environmental Variables
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT

// View Engine
app.set('view engine', 'ejs')

//Routes
app.use('/', routersConfig)

// Call the App
app.listen(port, () => console.log(`App Listening on *:` + port))