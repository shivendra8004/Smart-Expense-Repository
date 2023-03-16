import React from "react";

const Analytics = ({ allTransaction }) => {
  const totalTransaction = allTransaction.length;
  const totalIncomeTransaction = allTransaction.filter((transaction) => transaction.type === "income");
  const totalExpenseTransaction = allTransaction.filter((transaction) => transaction.type === "expense");
  const totalIncomePercentage = (totalIncomeTransaction / totalTransaction) * 100;
  const totalExpensePercentage = (totalExpenseTransaction / totalTransaction) * 100;
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">Total Transactions : {totalTransaction}</div>
            <div className="card-body">
              <h5>Total Income : {totalIncomeTransaction.length}</h5>
              <h5>Total Expense : {totalExpenseTransaction.length}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
