import React, { useState } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import axios from "axios";
const Register = () => {
  // Navigation
  const navigate = useNavigate();
  // Loading Hook
  const [loading, setLoading] = useState(false);
  // Form Submit
  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      await axios.post("/users/register", values);
      message.success("Successfully Registered");
      setLoading(false);
      navigate("/users/login");
    } catch (error) {
      setLoading(false);
      message.warning("Invalid Username or Password");
    }
  };
  return (
    <>
      <div className="register">
        {loading && <Spinner />}
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
