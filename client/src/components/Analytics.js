import React from "react";
import { Progress } from "antd";
const Analytics = ({ allTransaction }) => {
  const totalTransaction = allTransaction.length;
  const totalIncomeTransaction = allTransaction.filter((transaction) => transaction.type === "income");
  const totalExpenseTransaction = allTransaction.filter((transaction) => transaction.type === "expense");
  const totalIncomePercentage = (totalIncomeTransaction / totalTransaction) * 100;
  const totalExpensePercentage = (totalExpenseTransaction / totalTransaction) * 100;
  return (
    <div>
      <div className="row m-3">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">Total Transactions : {totalTransaction}</div>
            <div className="card-body">
              <h5>Total Income : {totalIncomeTransaction.length}</h5>
              <h5>Total Expense : {totalExpenseTransaction.length}</h5>
              <div>
                <Progress
                  type="circle"
                  strokeColor={"green"}
                  className="mx-2"
                  percent={totalIncomePercentage.toFixed(0)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
