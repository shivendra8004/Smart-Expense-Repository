import React from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const navigate = useNavigate();
  // Form Submit
  const handleSubmit = async (values) => {
    try {
      await axios.post("/users/register", values);
      message.success("Successfully Registered");
      navigate("/users/login");
    } catch (error) {
      message.warning("Invalid Username or Password");
    }
  };
  return (
    <>
      <div className="register">
        <Form layout="vertical" onFinish={handleSubmit}>
          <h2>Register User </h2>
          <Form.Item label="Name" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" />
          </Form.Item>
          <div className="d-flex justify-content-between">
            <Link to="/login">Already Registered? Login</Link>
            <button className="btn btn-primary">Register</button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Register;
