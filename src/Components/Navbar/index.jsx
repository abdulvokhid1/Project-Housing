import React from "react";
import {
  Container,
  Houseicon,
  Housing,
  Iconhouzing,
  Term,
  Wordhouse,
} from "./style";
import house from "../Assets/icons/house.png";
import term from "../Assets/images/term.png";
export const Navbar = () => {
  return (
    <Container>
      <Housing>
        <Iconhouzing>
          <Houseicon src={house} />
          <Wordhouse>Houzing</Wordhouse>
        </Iconhouzing>
      </Housing>
    </Container>
  );
};

export default Navbar;
