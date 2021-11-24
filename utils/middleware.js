const express = require("express")
const cookieParser = require("cookie-parser")
const morgan = require("morgan")
const cors = require("cors")
const corsOptions = require("./cors")

// function to create context property in every request with shared data
const applicationContext = (req, res, next) => {
    // data to share can be added in this object
    req.context = {}
    // move on to next middleware
    next()
}


const registerMiddleware = (app) => {
    app.use(cors(corsOptions)) // cors headers
    app.use(cookieParser()) // parse cookies
    app.use(express.json()) // parse json bodies
    app.use(morgan("tiny")) // logging
    app.use(applicationContext()) // add context object to request
}

module.exports = registerMiddleware