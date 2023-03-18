const express = require("express");
const {
  addTransactions,
  getAllTransactions,
  editTransactions,
  deleteTransactions,
} = require("../controllers/transaction.controller");
const transactionRouter = express.Router();
// Routes

// POST|| ADD Transaction
transactionRouter.post("/add-transaction", addTransactions);
// POST|| Edit Transaction
transactionRouter.post("/edit-transaction", editTransactions);
// POST|| Get Transactions
transactionRouter.post("/get-transaction", getAllTransactions);
// POST|| Delete Transactions
transactionRouter.post("/delete-transaction", deleteTransactions);
module.exports = transactionRouter;
