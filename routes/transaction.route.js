const express = require("express");
const { addTransactions, getAllTransactions } = require("../controllers/transaction.controller");
const transactionRouter = express.Router();
// Routes
// POST|| ADD Transaction
transactionRouter.post("/addtransaction", addTransactions);
// POST|| POST Transactions
transactionRouter.post("/gettransaction", getAllTransactions);
module.exports = transactionRouter;
