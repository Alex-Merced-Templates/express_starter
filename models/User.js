// import connection, grab schema and model
const sequalize = require("../connection/db")
const {DataTypes} = require("sequelize")

// Define User Model
const User = sequalize.define("User", {
    username: {type: DataTypes.STRING, allowNull: false, unique: true},
    password: {type: DataTypes.STRING, allowNull: false},
    role: {type: DataTypes.STRING, allowNull: false, defaultValue: "general"}
}, {tableName: "users", timestamps: true})

// create the table if doesn't exist

async function createTable(){
    await User.sync()
}

createTable()

// export User
module.exports = User
