const mongoose = require("mongoose");
const schema = mongoose.Schema();
const userSchema = new schema({});

const userModel = mongoose.model("userModel", userSchema);
module.exports = userModel;
