import React, { useState } from "react";
import { Modal } from "antd";
import Layout from "../components/Layout/Layout";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Layout>
      <div className="filters">
        <div>Range Filters</div>
        <div>
          <button className="btn btn-primary" onClick={() => setShowModal(true)}>
            Add Transaction
          </button>
        </div>
      </div>
      <div className="content"></div>
      <Modal title="Add Transaction" visible={showModal}></Modal>
    </Layout>
  );
};

export default HomePage;
