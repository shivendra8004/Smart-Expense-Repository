import { useRef, useState } from "react";
import logo from "../../assets/smartExpenseLogo.svg";
import landing from "../../assets/landing.png";
import contact from "../../assets/contact.png";
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
                <div className="col-6 col-sm-2 d-flex align-items-center justify-content-center">
                    <img className="logo " src={logo} alt="Smart Expense" />
                </div>
                <div className="d-none col-sm-8 d-sm-flex align-items-center justify-content-center">
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
                <div className="col-6 col-sm-2 d-flex align-items-center justify-content-center">
                    <div className="d-flex justify-content-center btn-shadow">
                        <Link className="link" to="/login">
                            <i class="bi bi-box-arrow-in-right pe-2"></i>
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container text-light " ref={scrollToHome} id="home">
                <div className="row align-items-center h-90">
                    <div className="col col-sm-5 h-75 ">
                        <div className="heading-text m-auto">
                            <span className="d-block">Finding Balance</span>
                            <span className="d-block">between</span>
                            <span className="d-block">Income and Expense</span>
                        </div>
                        <div className="sub-text m-auto">
                            Take control of your finances with Smart Expense, a powerful and intuitive expense management system. Say goodbye to the hassle of
                            manual expense tracking and let our innovative platform streamline your financial management process.
                        </div>
                        <div className="btn-div m-auto mt-4">
                            <Link to="/home" className="link btn-link w-25">
                                Get Started
                            </Link>
                        </div>
                    </div>
                    <div className="d-none d-sm-block col-sm-7 h-100 overflow-hidden">
                        <img className="landingImg" src={landing} alt="" />
                    </div>
                </div>
                <div className="row h-10">
                    <div className="col ">
                        <Link className="link" onClick={() => scrollToFeatures.current.scrollIntoView()}>
                            <div className="d-flex justify-content-center">
                                <i className="bi bi-mouse fs-3"></i>
                            </div>
                            <div className="fs-5 d-flex justify-content-center">Scroll</div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container text-light" ref={scrollToFeatures} id="features">
                <div className="row container-heading ">
                    <div className="col fs-1 d-flex justify-content-center">Features</div>
                </div>
                <div className="row card-col">
                    <div className="col-12 col-sm-6 d-flex align-items-center justify-content-center">
                        <div className=" w-sm-75 h-90 text-center card-shadow">
                            <h4 className="card-heading">User Registration and Authentication</h4>
                            <p className="w-90 m-auto pt-1">
                                It ensures that only authorized users can access their accounts and interact with the Smart Expense system. It gives secure and
                                personalized experience allowing peoples to manage their expenses confidently while maintaining the privacy of their personal
                                information.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6  d-flex align-items-center justify-content-center">
                        <div className=" w-sm-75 h-90 text-center card-shadow">
                            <h4 className=" card-heading">Expense Tracking and Categorization</h4>
                            <p className="w-90 m-auto pt-1">
                                This feature empowers users to manage their finances effectively. Smart Expense offers a process for adding expenses, allowing
                                users to enter details such as the amount date and description. With a user friendly interface it becomes convenient and time
                                saving.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row card-col">
                    <div className="col-12 col-sm-6  d-flex align-items-center justify-content-center">
                        <div className=" w-sm-75 h-90 text-center card-shadow">
                            <h4 className="card-heading">Reporting and Visualization</h4>
                            <p className="w-90 m-auto pt-1">
                                This feature give users a clear understanding of their financial status. By visual analytics, and comparative analysis, users
                                can see insights into their spending habits, make informed financial decisions, and work towards achieving their targets.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 d-flex align-items-center justify-content-center">
                        <div className=" w-sm-75 h-90 text-center card-shadow">
                            <h4 className="card-heading">Real-time Data Updates</h4>
                            <p className="w-90 m-auto pt-1">
                                This feature enhances the overall user experience of the Smart Expense system by ensuring that users have access to the latest
                                financial information. It provides financial insights and empowering users to effectively manage their expenses in real-time.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row container-heading ">
                    <div className="col ">
                        <Link className="link" onClick={() => scrollToContact.current.scrollIntoView()}>
                            <div className="d-flex justify-content-center">
                                <i className="bi bi-mouse fs-3"></i>
                            </div>
                            <div className="fs-5 d-flex justify-content-center">Scroll</div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container text-light" ref={scrollToContact} id="contact">
                <div className="row container-heading">
                    <div className="col fs-1 d-flex justify-content-center">Contact Us</div>
                </div>
                <div className="row h-90">
                    <div className=" col-12 col-sm-6 d-flex align-items-center">
                        <div className="w-50 h-75  m-auto">
                            <label htmlFor="name" className="form-label m-0 fs-6">
                                Full Name
                            </label>
                            <input type="text" className="form-control mb-2" id="name" placeholder="Shivendra Jat" />
                            <label htmlFor="email" className="form-label m-0 mt-1 fs-6">
                                Enter Email
                            </label>
                            <input type="email" className="form-control mb-2" id="email" placeholder="user@text.com" />
                            <label htmlFor="message" className="form-label m-0 mt-1 fs-6">
                                Message
                            </label>
                            <textarea type="text" rows="8" className="form-control mb-2" id="message" placeholder="Great Project..." />
                            <button className="btn" type="submit">
                                Send
                            </button>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6">
                        <div className="h-75 w-75 text-center">
                            <img className="contact-img " src={contact} alt="contact us" />
                        </div>
                        <div className="d-flex justify-content-evenly h-25 w-75">
                            <Link to="https://wa.me/7828278004?text=Hey%20Shivendra%2C%20Lets%20have%20a%20chat" target="_blank">
                                <div>
                                    <i className="bi bi-whatsapp fs-1 text-success border border-success border-2 p-2 ps-3 pe-3 rounded"></i>
                                </div>
                            </Link>
                            <Link to="https://www.linkedin.com/in/shivendra-jat-aab841177/" target="_blank">
                                <div>
                                    <i class="bi bi-linkedin fs-1 text-primary border border-primary border-2 p-2 ps-3 pe-3 rounded"></i>
                                </div>
                            </Link>
                            <Link className="link" to="https://github.com/SHIVENDRA8004" target="_blank">
                                <div>
                                    <i class="bi bi-github fs-1  border  border-2 p-2 ps-3 pe-3 rounded"></i>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container text-light" ref={scrollToAbout} id="about">
                <h1>About</h1>
            </div>
        </div>
    );
};

export default LandingPage;
