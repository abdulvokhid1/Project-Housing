import React, { useEffect, useState } from "react";
import { buymap } from "../../mock";
import { NavLink } from "react-router-dom";
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
  Locationtype,
  Locationall,
  Searchtype,
  Searchenter,
  Propertytype,
  Property,
  Discover,
  Smallone,
} from "./style";

const { REACT_APP_BASE_URL: url } = process.env;
export const Homepage = () => {
  const [state, setState] = useState(null);

  useEffect(() => {
    fetch(`${url}/v1/houses`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res?.data);
      })
      .then((state) => setState(state));
  }, []);
  return (
    <Container>
      <Search>
        <Centerdiv>
          <Middle>It's great to be home!</Middle>
          <Middlebig>Find Your Perfect Home</Middlebig>
          <Buymap>
            {buymap.map((value) => {
              return (
                <NavLink
                  to={value.path}
                  key={value.id}
                  className={"homenavlink"}
                >
                  {value.title}
                </NavLink>
              );
            })}
          </Buymap>
          <Button>
            <Type>
              <Propertytype>Type</Propertytype>
              <Property>Property Type</Property>
            </Type>
            <Location>
              <Locationtype>Location</Locationtype>
              <Locationall>All Cities</Locationall>
            </Location>
            <Searchword>
              <Searchtype>Search</Searchtype>
              <Searchenter>Enter Keywords</Searchenter>
            </Searchword>
          </Button>
        </Centerdiv>
      </Search>
      <Discover>Discover Our Featured Lastings </Discover>
      <Smallone>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur.{" "}
      </Smallone>

      {/* <div>
        {data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
      </div> */}
    </Container>
  );
};
export default Homepage;
