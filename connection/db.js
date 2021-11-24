require("dotenv").config()
const mongoose = require("mongoose")

// get env variables
const { DATABASE_URL } = process.env

// connect to mongoose
mongoose.connect(DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})

// Connection Messages
mongoose.connection
.on("open", () => console.log("Connected to Mongo"))
.on("close", () => console.log("Disconnected from Mongo"))
.on("error", (error) => console.log(error))

// export connection
module.exports = mongoose