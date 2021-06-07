import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./css/Layout.css";

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  );
}
