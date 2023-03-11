const express = require("express");
const { addTransactions, getAllTransactions } = require("../controllers/transaction.controller");
const transactionRouter = express.Router();
// Routes
// POST|| ADD Transaction
transactionRouter.post("/add-transaction", addTransactions);
// POST|| POST Transactions
transactionRouter.post("/all-transaction", getAllTransactions);
module.exports = transactionRouter;
