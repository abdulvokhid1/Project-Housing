import React from "react";
import {
  Container,
  Houseicon,
  Housing,
  Iconhouzing,
  Searchbar,
  Wordhouse,
  Home,
  Homemap,
  Buttonlist,
  Create,
} from "./style";
import house from "../Assets/icons/house.png";
import term from "../Assets/images/term.png";
import { navbar } from "../../Utils/mock";

export const Navbar = () => {
  return (
    <Container>
      <Housing>
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
      </Housing>
    </Container>
  );
};

export default Navbar;
