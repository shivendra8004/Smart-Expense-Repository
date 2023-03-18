import React, { useState, useEffect } from "react";
import { Form, Input, Modal, Select, Table, message, DatePicker } from "antd";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import Spinner from "../components/Spinner";
import moment from "moment";
import { UnorderedListOutlined, AreaChartOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Analytics from "../components/Analytics";
const { RangePicker } = DatePicker;
const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [allTransaction, setAllTransaction] = useState([]);
  const [frequency, setFrequency] = useState("7");
  const [selectedDate, setSelectedDate] = useState([]);
  const [type, setType] = useState("all");
  const [viewData, setViewData] = useState("table");
  const [editable, setEditable] = useState(null);
  // Creating Table formate to display all transactions
  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      render: (text) => <span>{moment(text).format("YYYY-MM-DD")}</span>,
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },
    {
      title: "Type",
      dataIndex: "type",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Reference",
      dataIndex: "reference",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Actions",
      render: (text, record) => (
        <div>
          <EditOutlined
            onClick={() => {
              setEditable(record);
              setShowModal(true);
            }}
          />
          <DeleteOutlined className="mx-2" />
        </div>
      ),
    },
  ];
  // GetAllTransaction Hook
  useEffect(() => {
    // Get All Transactions
    const getAllTransaction = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        setLoading(true);
        const response = await axios.post("/transactions/get-transaction", {
          userid: user._id,
          frequency,
          selectedDate,
          type,
        });
        setLoading(false);
        setAllTransaction(response.data);
      } catch (error) {
        setLoading(false);
        console.log(error);
        message.error("Error in Fetching Transactions from Database");
      }
    };
    getAllTransaction();
  }, [frequency, selectedDate, type]);
  // Handle Submit Function
  const HandleSubmit = async (values) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      setLoading(true);
      await axios.post("/transactions/add-transaction", { ...values, userid: user._id });
      setLoading(false);
      message.success("Transaction Added Successfully");
      setShowModal(false);
      setEditable(null);
    } catch (error) {
      setLoading(false);
      message.error("Error in Adding Transaction");
      console.log(error);
    }
  };
  return (
    <Layout>
      {loading && <Spinner />}
      <div className="filters ">
        <h5> Filter Transactions</h5>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            {/* Filter Transactions By Date */}
            <h6 className="mx-2">Select Date</h6>
            <Select style={{ width: "130px" }} value={frequency} onChange={(values) => setFrequency(values)}>
              <Select.Option value="7">Last 1 Week</Select.Option>
              <Select.Option value="30">Last 1 Month</Select.Option>
              <Select.Option value="365">Last 1 Year</Select.Option>
              <Select.Option value="custom">Custom</Select.Option>
            </Select>
            {frequency === "custom" && (
              <RangePicker
                value={selectedDate}
                onChange={(values) => {
                  setSelectedDate(values);
                }}
              />
            )}
          </div>
          {/* Filter Transactions By Type */}
          <div className="d-flex align-items-center">
            <h6 className="mx-2">Select Type</h6>
            <Select style={{ width: "90px" }} value={type} onChange={(values) => setType(values)}>
              <Select.Option value="income">Income</Select.Option>
              <Select.Option value="expense">Expense</Select.Option>
              <Select.Option value="all">All</Select.Option>
            </Select>
          </div>
          <div className="switch-icons d-flex align-items-center">
            <UnorderedListOutlined
              className={`mx-2 ${viewData === "table" ? "active-icon" : "inactive-icon"}`}
              onClick={() => setViewData("table")}
            />
            <AreaChartOutlined
              className={`mx-2 ${viewData === "analytics" ? "active-icon" : "inactive-icon"}`}
              onClick={() => setViewData("analytics")}
            />
          </div>
          <div>
            <button className="btn btn-primary " onClick={() => setShowModal(true)}>
              Add Transaction
            </button>
          </div>
        </div>
      </div>
      <div className="content">
        {viewData === "table" ? (
          <Table className="mt-3" columns={columns} dataSource={allTransaction} />
        ) : (
          <Analytics allTransaction={allTransaction} />
        )}
      </div>
      <Modal
        title={editable ? "Edit Transaction" : " Add Transaction"}
        open={showModal}
        onCancel={() => setShowModal(false)}
        footer={false}
      >
        <Form layout="verticle" onFinish={HandleSubmit} initialValues={editable}>
          <Form.Item label="Amount" name="amount">
            <Input type="text" />
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
            <Input type="date" />
          </Form.Item>
          <Form.Item label="Reference" name="reference">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <Input type="text" />
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
