import React from "react";
import { Centerdiv, Container, Middle, Search } from "./style";

export const Homepage = () => {
  return (
    <Container>
      <Search>
        <Centerdiv>{/* <Middle>It's great to be home!</Middle> */}</Centerdiv>
      </Search>
    </Container>
  );
};
export default Homepage;
