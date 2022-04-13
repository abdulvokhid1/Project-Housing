import React, { useEffect, useState } from "react";
import { buymap } from "../../mock";
import { NavLink } from "react-router-dom";
import landing from "../Assets/images/landing.png";
import circle from "../Assets/images/circle.png";
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
  Mapping,
  Good,
  Carding,
  Card_Img,
  Featured,
  Sale,
  Circle,
  Card_City,
  Address,
  Describe,
} from "./style";

const { REACT_APP_BASE_URL: url } = process.env;
export const Homepage = () => {
  const [data, setData] = useState([]);
  const [arr, setArr] = useState([]);

  useEffect(async () => {
    await fetch(`${url}/v1/houses`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setData(res.dataList[0]));

    // localStorage.setItem("token", res?.data);
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
      <Mapping>
        <Good>
          {data.map(
            (item) =>
              item.id <= 7 && (
                <Carding key={item.id}>
                  <Card_Img>
                    <Featured>FEATURED</Featured>
                    <Sale>FOR SALE</Sale>
                    <Circle src={circle} />
                  </Card_Img>
                  <Card_City>
                    <Describe>{item?.description}</Describe>
                    <Address>
                      {item?.city},{item?.country}
                    </Address>
                  </Card_City>
                </Carding>
              )
          )}
        </Good>
      </Mapping>
    </Container>
  );
};
export default Homepage;
