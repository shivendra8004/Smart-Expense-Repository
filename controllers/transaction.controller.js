const transactionModel = require("../models/transaction.model");
const moment = require("moment");
const getAllTransactions = async (req, res) => {
  try {
    const { frequency, selectedDate } = req.body;
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
