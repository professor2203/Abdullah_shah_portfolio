import React from "react";
 import Navbar from "./Navbar";
 import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <header >
      <Navbar/>

      </header>
      <main>{children}</main>
      <Footer/>  

    </div>
  );
};

export default Layout;
