import React from "react";
import { Container } from "./style";
import Navbar from "../Navbar";
// import Body from "../Body";
import { BrowserRouter as Router } from "react-router-dom";
import Homepage from "../Homepage";
import Body from "../Body";

export const Root = () => {
  return (
    <Router>
      <Container>
        <Navbar />
        <Body />
        {/* <Homepage /> */}
      </Container>
    </Router>
  );
};

export default Root;
