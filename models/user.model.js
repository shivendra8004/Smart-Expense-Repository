const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is Required"],
    },
    email: {
      type: String,
      required: [true, "Email is Required and Must be unique"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is Required"],
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("userModel", userSchema);
module.exports = userModel;
