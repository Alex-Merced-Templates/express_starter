require("dotenv").config();
const { Sequelize } = require("sequelize");

// connect to database
const sequelize = new Sequelize(process.env.DATABASE_URL)


// check if connection established
async function checkConnection() {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }

checkConnection()

//export connection
module.exports = sequelize;
