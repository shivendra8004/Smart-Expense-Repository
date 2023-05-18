import { Form, Input, message } from "antd";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../../components/Spinner";
import "./login.css";
import login3 from "../../assets/login3.png";
const Login = () => {
    // To use Navigate
    const navigate = useNavigate();

    // Loading Spinner Hook
    const [loading, setLoading] = useState(false);

    // To handle submit
    const handleSubmit = async (values) => {
        try {
            setLoading(true);
            const { data } = await axios.post("/users/login", values);
            setLoading(false);
            message.success("Login Suceessfull");
            localStorage.setItem("user", JSON.stringify({ ...data.user, password: " " }));
            navigate("/home");
        } catch (error) {
            setLoading(false);
            message.error("Something Went Wrong! Try Again");
        }
    };
    // Preventing user from Login Multiple time when user is already logged in
    useEffect(() => {
        if (localStorage.getItem("user")) {
            navigate("/home");
        }
    }, [navigate]);
    return (
        <>
            <div className="container-fluid login-page">
                {loading && <Spinner />}
                <div className="row h-100">
                    <div className="col h-100 d-flex justify-content-center align-items-center">
                        <div className="card-shadow h-60 w-75 d-flex align-items-center">
                            <div className="d-none d-sm-block m-auto text-center">
                                <img height="330" src={login3} alt="Login" />
                                <p className=" w-75 m-auto">Access your personalized dashboard by logging into your account."</p>
                            </div>
                            <div className="m-auto text-center w-75 p-4">
                                <h2>Login</h2>
                                <div className="w-50 m-auto">
                                    <Form layout="vertical" onFinish={handleSubmit}>
                                        <Form.Item label={<label style={{ color: "white" }}>Email</label>} name="email">
                                            <Input type="email" style={{ color: "white" }} />
                                        </Form.Item>
                                        <Form.Item label={<label style={{ color: "white" }}>Password</label>} name="password">
                                            <Input type="password" />
                                        </Form.Item>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <Link className="link" to="/register">
                                                New User?.Register
                                            </Link>
                                            <button className="btn btn-primary ">Login</button>
                                        </div>
                                    </Form>
                                    <Link className="link " to="/">
                                        Home
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-12 col-sm-6 h-100 d-flex align-items-center">
                        
                    </div> */}
                </div>
            </div>
            {/* <div className="login d-flex align-items-center justify-content-center">
                {loading && <Spinner />}
                <Form layout="vertical" onFinish={handleSubmit}>
                    <h2>Login</h2>
                    <Form.Item label="Email" name="email">
                        <Input type="email" />
                    </Form.Item>
                    <Form.Item label="Password" name="password">
                        <Input type="password" />
                    </Form.Item>
                    <div className="d-flex justify-content-between">
                        <Link to="/register">New User? Register</Link>
                        <button className="btn btn-primary">Login</button>
                    </div>
                </Form>
            </div> */}
        </>
    );
};

export default Login;
