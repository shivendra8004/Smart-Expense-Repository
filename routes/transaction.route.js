const express = require("express");
const { addTransactions, getAllTransactions } = require("../controllers/transaction.controller");
const transactionRouter = express.Router();
// Routes
// POST|| ADD Transaction
transactionRouter.post("/add-transaction", addTransactions);
// GET|| GET Transactions
transactionRouter.get("/all-transaction", getAllTransactions);
module.exports = transactionRouter;
