import React, { Fragment } from "react";
import Cart from "../common/Cart/";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";

const GlobalLayout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <Cart />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default GlobalLayout;
