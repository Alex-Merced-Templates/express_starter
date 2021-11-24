require("dotenv").config() // load variables from .env
const express = require("express")
const registerMiddleware = require("./utils/middleware")

// Grab any ENV variables to be used, set default values in case .env file missing
const { PORT = 3000 } = process.env

// The Application Object
const app = express()

// registerMiddleware
registerMiddleware(app)

// Server listener
app.listen(PORT, () => console.log(`listening on port ${PORT}`))