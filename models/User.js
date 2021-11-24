// import connection, grab schema and model
const {Schema, model} = require("../connection/db")

// define user schema
const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, required: true, default: "general"}
}, {timestamps: true})

// define user model
const User = model("User", userSchema)

// export User
module.exports = User
