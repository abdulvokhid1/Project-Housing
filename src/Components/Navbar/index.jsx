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
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

export const Navbar = () => {
  return (
    <Router>
      <Container>
        <Iconhouzing>
          <Houseicon src={house} />
          <Wordhouse>Houzing</Wordhouse>
        </Iconhouzing>
        <Searchbar>
          <Home>
            {navbar.map((value) => {
              return <Homemap key={value.id}>{value.title}</Homemap>;
            })}
          </Home>
          <Buttonlist>
            <Create>Create Listing</Create>
          </Buttonlist>
        </Searchbar>
      </Container>
    </Router>
  );
};

export default Navbar;
