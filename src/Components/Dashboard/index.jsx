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

export const Dashboard = () => {
  return (
    <AllWrapper>
      <BigContainer>
        <Container>
          {dashbar.map((value) => {
            // const navigate = useNavigate();
            return (
              <NavLink
                style={({ isActive }) => {
                  return {
                    color: isActive ? "red" : "black",
                  };
                }}
                className={"dashnav"}
                to={value.path}
                key={value.id}
              >
                <Mapwrapper>{value.title}</Mapwrapper>
              </NavLink>
            );
          })}
        </Container>
      </BigContainer>
      <Outlet />
    </AllWrapper>
  );
};
export default Dashboard;
