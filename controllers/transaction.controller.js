const transactionModel = require("../models/transaction.model");

const getAllTransactions = async (req, res) => {
  try {
    const transactions = await transactionModel.find({
      userid: req.body.userid,
    });
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json(error);
  }
};
const addTransactions = async (req, res) => {
  try {
    const newTransaction = new transactionModel(req.body);
    await newTransaction.save();
    res.status(200).send("Transaction Created Successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAllTransactions,
  addTransactions,
};
