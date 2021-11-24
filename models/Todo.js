// import connection, grab schema and model
const { Schema, model } = require("../connection/db");

// define Todo schema
const todoSchema = new Schema(
  {
    message: { type: String, required: true },
    completed: { type: Boolean, default: false },
    username: { type: String, required: true },
  },
  { timestamps: true }
);

// define Todo model
const Todo = model("Todo", todoSchema);

// export Todo
module.exports = Todo;
