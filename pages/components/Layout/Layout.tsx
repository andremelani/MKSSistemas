import React, { ReactNode } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

interface Children {
  children: ReactNode;
}

const Layout = ({ children }: Children) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
