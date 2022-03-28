import React from "react";
import { Container } from "./style";
import Navbar from "../Navbar";
import { BrowserRouter as Router } from "react-router-dom";
// import Myhome from "../Myhome";
import { Route, Routes } from "react-router-dom";
import { navbar } from "../../Utils/mock";
import Myhome from "../Myhome";
import Homepage from "../Homepage";

export const Root = () => {
  return (
    <Router>
      <Container>
        {/* <Navbar /> */}
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<Homepage />} />
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
