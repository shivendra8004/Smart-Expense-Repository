const transactionModel = require("../models/transaction.model");
const moment = require("moment");
const getAllTransactions = async (req, res) => {
  try {
    const { frequency, selectedDate, type } = req.body;
    const transactions = await transactionModel.find({
      ...(frequency !== "custom"
        ? {
            date: {
              $gt: moment().subtract(Number(frequency), "d").toDate(),
            },
          }
        : {
            date: {
              $gte: selectedDate[0],
              $lte: selectedDate[1],
            },
          }),
      userid: req.body.userid,
      ...(type !== "all" && { type }),
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
const editTransactions = async (req, res) => {
  try {
    await transactionModel.findOneAndUpdate({ _id: req.body.transactionId }, req.body.payLoad);
    res.status(200).send("Edit Successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
const deleteTransactions = async (req, res) => {
  try {
    await transactionModel.findOneAndDelete({ _id: req.body.transactionId });
    res.status(200).send("Transaction Deleted");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = {
  getAllTransactions,
  addTransactions,
  editTransactions,
  deleteTransactions,
};
