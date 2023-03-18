const express = require("express");
const { addTransactions, getAllTransactions, editTransactions } = require("../controllers/transaction.controller");
const transactionRouter = express.Router();
// Routes
// POST|| ADD Transaction
transactionRouter.post("/add-transaction", addTransactions);
// POST|| Edit Transaction
transactionRouter.post("/edit-transaction", editTransactions);
// POST|| POST Transactions
transactionRouter.post("/get-transaction", getAllTransactions);
module.exports = transactionRouter;
