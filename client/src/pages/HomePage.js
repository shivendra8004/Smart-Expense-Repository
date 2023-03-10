import React from "react";
import Layout from "../components/Layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      <div className="filters">
        <div>Range Filters</div>
        <div>
          <button className="btn btn-primary">Add Transaction</button>
        </div>
      </div>
      <div className="content"></div>
    </Layout>
  );
};

export default HomePage;
