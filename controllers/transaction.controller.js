const transactionModel = require("../models/transaction.model");
const getAllTransactions = (req, res) => {
  res.send("Getting All Transactions");
};
const addTransactions = async (req, res) => {
  try {
    const newTransaction = new transactionModel(req.body);
    await newTransaction.save();
    res.status(201).send("Transaction Created Successfully");
  } catch (error) {}
};
module.exports = {
  getAllTransactions,
  addTransactions,
};
