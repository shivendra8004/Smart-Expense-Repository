// const mongoose=require('mongoose');
// const colors=require('colors');
// const connectDb=async()=>{
//   try {
//      await mongoose.connect(process.env.MONGO_URL)
//      console.log(`Server running on ${mongoose.connection.host}`.bgCyan.white);
//   } catch (error) {
//      console.log(`${error}`.bgRed)
//   }
// }
// module.exports=connectDb;

const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://JYOTI90:09JYOTI@cluster0.ywcc6h3.mongodb.net/EXPENSE-APP");
    console.log(`Server is Running on ${mongoose.connection.host}`.bgGreen.white);
  } catch (error) {
    console.log(`${error}`.bgRed);
  }
};
module.exports = connectDB;