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
import Sidebar from "../Sidebar";

export const Root = () => {
  return (
    <Router>
      <Container>
        {/* <Navbar /> */}
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<Homepage />} />
            {navbar.map((value) => {
              return (
                <Route
                  key={value.id}
                  exact
                  path={value?.path}
                  element={value.element}
                />
              );
            })}
          </Route>

          <Route element={<Navbar />}>
            <Route element={<Sidebar />}>
              {/* <Route element={<Dashboard />} /> */}
              {dashbar.map((value) => {
                return (
                  <Route
                    key={value.id}
                    exact
                    path={value?.path}
                    element={value.element}
                  />
                );
              })}
            </Route>
          </Route>
        </Routes>

        {/* <Homepage /> */}
      </Container>
    </Router>
  );
};

export default Root;
