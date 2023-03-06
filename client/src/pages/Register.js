import React from "react";
import { Form, Input } from "antd";
const Register = () => {
  return (
    <>
      <div className="register">
        <Form layout="vertical">
          <Form.Item label="Enter Name" name="name">
            <Input />
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Register;
