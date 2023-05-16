import { useRef, useState } from "react";
import logo from "../../assets/smartExpenseLogo.svg";
import { Link } from "react-router-dom";
import "./landingPage.css";
const LandingPage = () => {
    const scrollToHome = useRef();
    const scrollToFeatures = useRef();
    const scrollToContact = useRef();
    const scrollToAbout = useRef();

    const [active, setActive] = useState(["active", "", "", ""]);
    const setActiveFunction = (num) => {
        if (num === 0) {
            setActive(["active", "", "", ""]);
        }
        if (num === 1) {
            setActive(["", "active", "", ""]);
        }
        if (num === 2) {
            setActive(["", "", "active", ""]);
        }
        if (num === 3) {
            setActive(["", "", "", "active"]);
        }
    };
    return (
        <div className="container-fluid landing">
            <div className="row nav position-fixed" style={{ width: "100vw" }}>
                <div className="col-sm-2 d-flex align-items-center justify-content-center">
                    <img className="logo " src={logo} alt="Smart Expense" />
                </div>
                <div className="col-sm-8 d-flex align-items-center justify-content-center">
                    <div className="w-50 d-flex align-items-center justify-content-between">
                        <Link
                            onClick={() => {
                                scrollToHome.current.scrollIntoView();
                                setActiveFunction(0);
                            }}
                            className="link"
                        >
                            <span className={`${active[0]}`}>Home</span>
                        </Link>
                        <Link
                            onClick={() => {
                                scrollToFeatures.current.scrollIntoView();
                                setActiveFunction(1);
                            }}
                            className="link"
                        >
                            <span className={`${active[1]}`}>Features</span>
                        </Link>
                        <Link
                            onClick={() => {
                                scrollToContact.current.scrollIntoView();
                                setActiveFunction(2);
                            }}
                            className="link"
                        >
                            <span className={`${active[2]}`}>Contact</span>
                        </Link>
                        <Link
                            onClick={() => {
                                scrollToAbout.current.scrollIntoView();
                                setActiveFunction(3);
                            }}
                            className="link"
                        >
                            <span className={`${active[3]}`}>About</span>
                        </Link>
                    </div>
                </div>
                <div className="col-sm-2 d-flex align-items-center justify-content-center">
                    <div className="d-flex justify-content-center btn-shadow">
                        <Link className="link" to="/login">
                            <i class="bi bi-box-arrow-in-right pe-2"></i>
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container text-light " ref={scrollToHome} id="home">
                <h1>Home</h1>
            </div>
            <div className="container text-light" ref={scrollToFeatures} id="features">
                <h1>Features</h1>
            </div>
            <div className="container text-light" ref={scrollToContact} id="contact">
                <h1>Contact</h1>
            </div>
            <div className="container text-light" ref={scrollToAbout} id="about">
                <h1>About</h1>
            </div>
        </div>
    );
};

export default LandingPage;
