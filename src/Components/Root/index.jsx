import React from "react";
import { Container } from "./style";
import Navbar from "../Navbar";
// import Body from "../Body";
import { BrowserRouter as Router } from "react-router-dom";
import Homepage from "../Homepage";

export const Root = () => {
  return (
    <Router>
      <Container>
        <Navbar />
        {/* <Homepage /> */}
      </Container>
    </Router>
  );
};

export default Root;
