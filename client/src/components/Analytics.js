import React from "react";
import { Progress } from "antd";
const Analytics = ({ allTransaction }) => {
  // All categories
  const categories = [
    "salary",
    "tip",
    "freelance",
    "other-income",
    "grocery",
    "travel",
    "medical",
    "food",
    "fee",
    "tax",
    "other",
  ];
  // Total Transactions
  const totalTransaction = allTransaction.length;
  const totalIncomeTransaction = allTransaction.filter((transaction) => transaction.type === "income");
  const totalExpenseTransaction = allTransaction.filter((transaction) => transaction.type === "expense");
  const totalIncomePercentage = (totalIncomeTransaction.length / totalTransaction) * 100;
  const totalExpensePercentage = (totalExpenseTransaction.length / totalTransaction) * 100;
  // Total Turnover
  const totalTurnover = allTransaction.reduce((acc, transaction) => acc + transaction.amount, 0);
  const totalIncomeTurnover = allTransaction
    .filter((transaction) => transaction.type === "income")
    .reduce((acc, transaction) => acc + transaction.amount, 0);
  const totalExpenseTurnover = allTransaction
    .filter((transaction) => transaction.type === "expense")
    .reduce((acc, transaction) => acc + transaction.amount, 0);
  const totalIncomeTurnoverPercentage = (totalIncomeTurnover / totalTurnover) * 100;
  const totalExpenseTurnoverPercentage = (totalExpenseTurnover / totalTurnover) * 100;
  return (
    <div>
      <div className="row m-3">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">Total Transactions : {totalTransaction}</div>
            <div className="card-body ">
              <div className="d-flex justify-content-around">
                <h5 className="text-success mx-2">Total Income : {totalIncomeTransaction.length}</h5>
                <h5 className="text-danger">Total Expense : {totalExpenseTransaction.length}</h5>
              </div>
              <div className="d-flex justify-content-around">
                <div>
                  <Progress
                    type="circle"
                    strokeColor={"green"}
                    className="mx-2"
                    percent={totalIncomePercentage.toFixed(1)}
                  />
                </div>
                <div>
                  <Progress
                    type="circle"
                    strokeColor={"red"}
                    className="mx-2"
                    percent={totalExpensePercentage.toFixed(1)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">Total Turnover : {totalTurnover}</div>
            <div className="card-body ">
              <div className="d-flex justify-content-around">
                <h5 className="text-success mx-2">Income: {totalIncomeTurnover}</h5>
                <h5 className="text-danger">Expense: {totalExpenseTurnover}</h5>
              </div>
              <div className="d-flex justify-content-around">
                <div>
                  <Progress
                    type="circle"
                    strokeColor={"green"}
                    className="mx-2"
                    percent={totalIncomeTurnoverPercentage.toFixed(1)}
                  />
                </div>
                <div>
                  <Progress
                    type="circle"
                    strokeColor={"red"}
                    className="mx-2"
                    percent={totalExpenseTurnoverPercentage.toFixed(1)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-4">
          <h4>Category Wise Income</h4>
          {categories.map((category) => {
            const amount = allTransaction
              .filter((transaction) => transaction.type === "income" && transaction.category === category)
              .reduce((acc, transaction) => acc + transaction.amount, 0);
            return (
              amount > 0 && (
                <div className="card">
                  <div className="card-body">
                    <h5>{category.charAt(0).toUpperCase() + category.slice(1, category.length)}</h5>
                    <Progress percent={((amount / totalIncomeTurnover) * 100).toFixed(1)} />
                  </div>
                </div>
              )
            );
          })}
        </div>
        <div className="col-md-4">
          <h4>Category Wise Income</h4>
          {categories.map((category) => {
            const amount = allTransaction
              .filter((transaction) => transaction.type === "income" && transaction.category === category)
              .reduce((acc, transaction) => acc + transaction.amount, 0);
            return (
              amount > 0 && (
                <div className="card">
                  <div className="card-body">
                    <h5>{category.charAt(0).toUpperCase() + category.slice(1, category.length)}</h5>
                    <Progress percent={((amount / totalIncomeTurnover) * 100).toFixed(1)} />
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
