const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");
// Suppressing the terminal warning
mongoose.set("strictQuery", true);
dotenv.config();
mongoose.set("strictQuery", true);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log(`Database is Running on ${mongoose.connection.host}`.bgGreen.white);
  } catch (error) {
    console.log(`${error}`.bgRed);
  }
};
module.exports = connectDB;
