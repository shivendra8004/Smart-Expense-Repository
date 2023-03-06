import React from "react";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <>
      <div className="register">
        <Form layout="vertical">
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
          </div>
          <button className="btn btn-primary">Register</button>
        </Form>
      </div>
    </>
  );
};

export default Register;
