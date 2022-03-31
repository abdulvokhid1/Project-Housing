import React from "react";
import { Container } from "./style";
import Navbar from "../Navbar";
import { BrowserRouter as Router } from "react-router-dom";
// import Myhome from "../Myhome";
import { Route, Routes } from "react-router-dom";
import Myhome from "../Myhome";
import Homepage from "../Homepage";
import { dashbar, navbar } from "../../Utils/mock";
import Dashboard from "../Dashboard";
import Myprofile from "../Myprofile";
import Profile from "../Profile";

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

          {/* <Route element={<Navbar />} /> */}
          <Route element={<Dashboard />}>
            {/* <Route element={<Dashboard />} /> */}
            {dashbar.map((value) => {
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
