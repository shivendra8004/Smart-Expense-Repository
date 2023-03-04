import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="content"></div>
      <Footer />
    </>
  );
};

export default Layout;
