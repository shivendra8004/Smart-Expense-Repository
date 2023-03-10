import React, { useState } from "react";
import { Form, Input, Modal } from "antd";
import Layout from "../components/Layout/Layout";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  // Handle Submit Function
  const HandleSubmit = (values) => {
    console.log(values);
  };
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
      <Modal title="Add Transaction" visible={showModal} onCancel={() => setShowModal(false)} footer={false}>
        <Form layout="verticle" onFinish={HandleSubmit}>
          <Form.Item label="Amount" name="amount">
            <Input type="text" required="True" />
          </Form.Item>
        </Form>
      </Modal>
    </Layout>
  );
};

export default HomePage;
