import React from "react";
import { Container } from "./style";
import Navbar from "../Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Homepage from "../Homepage";
import { Route, Routes } from "react-router-dom";
import { navbar } from "../../Utils/mock";
import Myhome from "../Myhome";

export const Root = () => {
  return (
    <Router>
      <Container>
        {/* <Navbar /> */}
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<Myhome />} />
            {navbar.map((value) => {
              return <Route exact path={value?.path} element={value.element} />;
            })}
          </Route>
        </Routes>
        {/* <Homepage /> */}
      </Container>
    </Router>
  );
};

export default Root;
