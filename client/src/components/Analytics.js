import React from "react";

const Analytics = ({ allTransaction }) => {
  const totalTransaction = allTransaction.length;
  const totalIncomeTransaction = allTransaction.filter((transaction) => transaction.type === "income");
  const totalExpenseTransaction = allTransaction.filter((transaction) => transaction.type === "expense");
  const totalIncomePercentage = (totalIncomeTransaction / totalTransaction) * 100;
  const totalExpensePercentage = (totalExpenseTransaction / totalTransaction) * 100;
  return (
    <div>
      <h1>Analytics</h1>
    </div>
  );
};

export default Analytics;
