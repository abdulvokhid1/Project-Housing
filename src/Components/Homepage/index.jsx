import React from "react";
import { buymap } from "../../mock";
import {
  Button,
  Buy,
  Buymap,
  Centerdiv,
  Container,
  Middle,
  Middlebig,
  Search,
  Searchword,
  Type,
  Location,
} from "./style";

export const Homepage = () => {
  return (
    <Container>
      <Search>
        <Centerdiv>
          <Middle>It's great to be home!</Middle>
          <Middlebig>Find Your Perfect Home</Middlebig>
          <Buymap>
            {buymap.map((value) => {
              return <Buy>{value.title}</Buy>;
            })}
          </Buymap>
          <Button>
            <Type>
              <p>Type</p>
              <p>Property Type</p>
            </Type>
            <Location></Location>
            <Searchword></Searchword>
          </Button>
        </Centerdiv>
      </Search>
    </Container>
  );
};
export default Homepage;
