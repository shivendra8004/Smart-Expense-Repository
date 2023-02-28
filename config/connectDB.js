const mongoose = require("mongoose");
const colors = require("colors");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log(`Server is Running on ${mongoose.connection.host}`.bgGreen.white);
  } catch (error) {
    console.log(`${error}`.bgRed);
  }
};
module.exports = connectDB;
