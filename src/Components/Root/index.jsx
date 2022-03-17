import React from "react";
import { Container } from "./style";
import Navbar from "../Navbar";
import Body from "../Body";
import { BrowserRouter as Router } from "react-router-dom";

export const Root = () => {
  return (
    <Router>
      <Container>
        <Navbar />
        {/* <Body /> */}
      </Container>
    </Router>
  );
};

export default Root;
