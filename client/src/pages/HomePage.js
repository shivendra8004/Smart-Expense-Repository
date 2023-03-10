import React, { useState } from "react";
import { Form, Input, Modal, Select } from "antd";
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
      <Modal title="Add Transaction" open={showModal} onCancel={() => setShowModal(false)} footer={false}>
        <Form layout="verticle" onFinish={HandleSubmit}>
          <Form.Item label="Amount" name="amount">
            <Input type="text" required="True" />
          </Form.Item>
          <Form.Item label="Type" name="type">
            <Select>
              <Select.Option value="income">Income</Select.Option>
              <Select.Option value="expense">Expense</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Category" name="category">
            <Select>
              <Select.Option value="salary">Salary</Select.Option>
              <Select.Option value="tip">Tip</Select.Option>
              <Select.Option value="freelance">Free Lancing</Select.Option>
              <Select.Option value="other-income">Other Income</Select.Option>
              <Select.Option value="grocery">Grocery</Select.Option>
              <Select.Option value="travel">Travel</Select.Option>
              <Select.Option value="medical">Medical</Select.Option>
              <Select.Option value="food">Food</Select.Option>
              <Select.Option value="fee">Fee</Select.Option>
              <Select.Option value="tax">Tax</Select.Option>
              <Select.Option value="other">Other</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Date" name="date">
            <Input type="date" required="True" />
          </Form.Item>
          <Form.Item label="Reference" name="reference">
            <Input type="text" required="True" />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <Input type="text" required="False" />
          </Form.Item>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </Form>
      </Modal>
    </Layout>
  );
};

export default HomePage;
