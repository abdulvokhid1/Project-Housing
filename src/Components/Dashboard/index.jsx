import React from "react";
import { dashbar } from "../../Utils/mock";
import {
  AllWrapper,
  BigContainer,
  Container,
  Mapwrapper,
  Wrapper,
} from "./style";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
export const Dashboard = () => {
  return (
    <Container>
      <Navbar />
      <h1>Dashboard</h1>
    </Container>
  );
};
export default Dashboard;
