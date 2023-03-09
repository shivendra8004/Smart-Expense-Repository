const transactionModel = require("../models/transaction.model");
const getAllTransactions = async (req, res) => {
  try {
    const transactions = await transactionModel.find({ createdAt: -1 });
    res.status(201).json({
      success: true,
      transactions,
    });
  } catch (error) {}
};
const addTransactions = async (req, res) => {
  try {
    const newTransaction = new transactionModel(req.body);
    await newTransaction.save();
    res.status(201).send("Transaction Created Successfully");
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};
module.exports = {
  getAllTransactions,
  addTransactions,
};
