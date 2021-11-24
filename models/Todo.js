// import connection, grab schema and model
const sequalize = require("../connection/db")
const {DataTypes} = require("sequelize")

// Define Todo Model
const Todo = sequalize.define("Todo", {
    username: {type: DataTypes.STRING, allowNull: false},
    message: {type: DataTypes.STRING}
}, {tableName: "todos", timestamps: true})

// create the table if doesn't exist

async function createTable(){
    await Todo.sync()
}

createTable()

// export User
module.exports = Todo
