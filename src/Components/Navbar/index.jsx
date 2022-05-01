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
import rangli from "../Assets/icons/rangli.png";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import term from "../Assets/images/term.png";
import { navbar } from "../../Utils/mock";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        {/* <h1 onClick={() => navigate("/signin")}>Sign in</h1> */}
        <Iconhouzing>
          <Houseicon src={rangli} />
          <Wordhouse>Houzing</Wordhouse>
        </Iconhouzing>
        <Searchbar>
          <Home>
            {navbar.map((value) => {
              return (
                <NavLink
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "red" : "black",
                      // textDecoration: isActive ? "underline" : "none",
                      fontSize: isActive ? "20px" : "15px",
                      // borderBottom: isActive ? "3px solid red" : "none",
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
