import React from "react";
import {
  Container,
  Houseicon,
  Iconhouzing,
  Searchbar,
  Wordhouse,
  Home,
  Homemap,
  Buttonlist,
  Create,
} from "./style";
import house from "../Assets/icons/house.png";
import { navbar } from "../../Utils/mock";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import term from "../Assets/images/term.png";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <h1 onClick={() => navigate("/homepage")}>Logo</h1>
        <Iconhouzing>
          <Houseicon src={house} />
          <Wordhouse>Houzing</Wordhouse>
        </Iconhouzing>
        <Searchbar>
          <Home>
            {navbar.map((value) => {
              return (
                <NavLink
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "red" : "purple",
                    };
                  }}
                  className={"navlink"}
                  to={value.path}
                  key={value.id}
                >
                  {value.title}
                </NavLink>
              );
            })}
          </Home>
          <Buttonlist>
            <Create>Create Listing</Create>
          </Buttonlist>
        </Searchbar>
      </Container>
      <Outlet />
    </>
  );
};

export default Navbar;
