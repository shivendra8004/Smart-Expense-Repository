const mongoose = require("mongoose");
const transactionSchema = new mongoose.Schema({
  amount: {
    type: String,
    required: [true, "Amount is Required"],
  },
});
const transactionModel = mongoose.model("transections", transactionSchema);
module.exports = transactionModel;
