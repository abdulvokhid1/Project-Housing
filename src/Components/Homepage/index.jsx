import React, { useEffect, useState } from "react";
import { buymap } from "../../mock";
import { NavLink } from "react-router-dom";
import landing from "../Assets/images/landing.png";
import circle from "../Assets/images/circle.png";
import bed from "../Assets/icons/bed.png";
import bath from "../Assets/icons/bath.png";
import garage from "../Assets/icons/garage.png";
import yard from "../Assets/icons/yard.png";
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
  Tables,
  Beds,
  Bed_Icon,
  Bed_Number,
  Bath,
  Bath_Icon,
  Bath_Number,
  Garage,
  Garage_Icon,
  Garage_Number,
  Yard,
  Yard_Icon,
  Yard_Number,
  Loading,
  Center,
  Border,
  Prices,
  Items,
  Price_Wrapper,
  Old_Price,
  New_Price,
  Arrayitem,
  Heart,
  Plus,
  Choose_Wrapper,
  Word_Wrapper,
  Choose_Word,
  Choose_Small,
  Mapping_Wrapper,
  Message,
} from "./style";
import { choosing } from "../../Utils/mock";
import { Img } from "../Dashboard/style";
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
      <Loading>
        {!localStorage.getItem("token") && (
          <>
            <h1>Log in first in Sign in page!</h1>
            <Center>Loading...</Center>
            <div class="progress">
              <div class="indeterminate"></div>
            </div>
          </>
        )}
      </Loading>
      <Mapping>
        <Good>
          {data.map(
            (item) =>
              item.id <= 9 && (
                <Carding key={item.id}>
                  <Card_Img>
                    <Featured>FEATURED</Featured>
                    <Sale>FOR SALE</Sale>
                    <Circle src={circle} />
                  </Card_Img>
                  <Card_City>
                    {/* <Describe>{item?.category?.name}</Describe> */}
                    <Address>
                      {item?.city},{item?.country}
                    </Address>
                    <Tables>
                      <Beds>
                        <Bed_Icon src={bed} />
                        <Bed_Number>{item?.houseDetails?.bed} beds</Bed_Number>
                      </Beds>
                      <Bath>
                        <Bath_Icon src={bath} />
                        <Bath_Number>
                          {item?.houseDetails?.bath} baths
                        </Bath_Number>
                      </Bath>
                      <Garage>
                        <Garage_Icon src={garage} />
                        <Garage_Number>
                          {item?.houseDetails?.garage} garages
                        </Garage_Number>
                      </Garage>
                      <Yard>
                        <Yard_Icon />
                        <Yard_Number>{item?.houseDetails?.area}</Yard_Number>
                      </Yard>
                    </Tables>
                    <Border></Border>
                    <Price_Wrapper>
                      <Prices>
                        <Old_Price>$ {item?.price}/mo</Old_Price>
                        <New_Price>$ {item?.salePrice}/mo</New_Price>
                      </Prices>
                      <Items>
                        <Arrayitem />
                        <Plus />
                        <Heart />
                      </Items>
                    </Price_Wrapper>
                  </Card_City>
                </Carding>
              )
          )}
        </Good>
      </Mapping>
      <Choose_Wrapper>
        <Word_Wrapper>
          <Choose_Word>Why Choose Us</Choose_Word>
          <Choose_Small>We provide full service at full step</Choose_Small>
        </Word_Wrapper>
        <Mapping_Wrapper>
          {choosing.map((value) => {
            return (
              <>
                <h1>{value.id}</h1>;
                <Message src={value?.icon} />
                <h1>Hello World</h1>
              </>
            );
          })}
        </Mapping_Wrapper>
      </Choose_Wrapper>
    </Container>
  );
};
export default Homepage;
