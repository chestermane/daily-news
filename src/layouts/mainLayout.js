import React from "react";
import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = (props) => {
  return (
    <div>
      <Container className="mt-5 mb-5">{props.children}</Container>
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
