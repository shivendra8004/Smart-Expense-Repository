const transactionModel = require("../models/transaction.model");
const getAllTransactions = (req, res) => {
  res.send("Getting All Transactions");
};
const AddTransactions = (req, res) => {
  res.send("Add Transaction");
};
module.exports = {
  getAllTransactions,
  AddTransactions,
};
