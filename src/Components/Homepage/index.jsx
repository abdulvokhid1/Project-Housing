import React, { useEffect, useState } from "react";
import { buymap } from "../../mock";
import { NavLink } from "react-router-dom";
import landing from "../Assets/images/landing.png";
import circle from "../Assets/images/circle.png";
import bed from "../Assets/icons/bed.png";
import bath from "../Assets/icons/bath.png";
import garage from "../Assets/icons/garage.png";
import yard from "../Assets/icons/yard.png";
import address from "../Assets/icons/address.png";
import tell from "../Assets/icons/tell.png";
import facebook from "../Assets/icons/facebook.png";
import instagram from "../Assets/icons/instagram.png";
import intime from "../Assets/icons/intime.png";
import twitter from "../Assets/icons/twitter.png";

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
  Border_Making,
  Wide,
  SearchIcon,
  DfWrapping,
  SearchWrapper,
  GroupIcon,
  WordAdvanced,
  SearchButton,
  IconS,
  IconsWrapper,
  MapIcons,
  MapTitles,
  MapText,
  ExploreWrapper,
  ExWord_Wrapper,
  ExWord,
  ExSmall,
  Apartment_Wrapper,
  Map_Wrapper,
  House_Icons,
  House_Name,
  Trends,
  Trends_Wrapper,
  Trends_Word,
  Trends_BigWord,
  Read_Button,
  Agent_Wrapper,
  AgWord_Wrapper,
  Agent_Word,
  AgSmall_Word,
  Now_Button,
  Contactbar,
  Bigicon,
  Contactus,
  Webbar,
  Signword,
  Inputword,
  Divinput,
  Loginword,
  Divregister,
  Passwordword,
  Divremember,
  Rememberme,
  Forgot,
  Iconpasword,
  Wordme,
  Divbutton,
  Username,
  Agensy,
  Demo,
  Wordreg,
  Regbutton,
  Loginput,
  Nameinput,
  Lastinput,
  Userinput,
  Passinput,
  Repassinput,
  Emailinput,
  Littlebar,
  Addressone,
  Iconaddress,
  Street,
  Iconaddresstwo,
  Streetwo,
  Addresstwo,
  Addressthree,
  Iconaddressthree,
  Streethree,
  Website,
  Face,
  Insta,
  Intime,
  Twit,
  // Discover,
  Discoverword,
  Chicago,
  Miami,
  New,
  Los,
  Discover2,
  Email_Wrapper,
  Email_Input,
  Telegram,
  TelegramIcon,
} from "./style";
// import bigicon from "../Assets/icons/bigicon.png";
import message from "../Assets/icons/message.png";

import { choosing } from "../../Utils/mock";
import { Img } from "../Dashboard/style";
import { apartment } from "../../mock/apartment";
const { REACT_APP_BASE_URL: url } = process.env;
export const Homepage = () => {
  const [data, setData] = useState([]);
  const [arr, setArr] = useState([]);

  useEffect(async () => {
    await fetch(`${url}/v1/houses`, {
      // headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
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
              <DfWrapping>
                <Searchenter>Enter Keywords</Searchenter>
                <SearchIcon />
              </DfWrapping>
            </Searchword>
            <SearchWrapper>
              <GroupIcon />
              <WordAdvanced>Advanced Search</WordAdvanced>
              <SearchButton>
                <IconS />
                <p>Search</p>
              </SearchButton>
            </SearchWrapper>
          </Button>
        </Centerdiv>
      </Search>
      <Discover2>Discover Our Featured Lastings </Discover2>
      <Smallone>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur.{" "}
      </Smallone>
      <Loading>
        {/* {!localStorage.getItem("token") && ( */}
        <>
          {/* <h1>Log in first in Sign in page!</h1> */}
          <Center>Loading...</Center>
          <div class="progress">
            <div class="indeterminate"></div>
          </div>
        </>
        {/* )} */}
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
                    {/*  <Describe>{item?.category?.name}</Describe> */}
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
                  <h1>Every card should be read</h1>
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
              <IconsWrapper key={value.id}>
                <MapIcons src={value.icon} />
                <MapTitles>{value.title}</MapTitles>
                <MapText>{value.text}</MapText>
              </IconsWrapper>
            );
          })}
        </Mapping_Wrapper>
      </Choose_Wrapper>
      <ExploreWrapper>
        <ExWord_Wrapper>
          <ExWord>Explore Our Properties</ExWord>
          <ExSmall>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reiciendis, nihil.
          </ExSmall>
        </ExWord_Wrapper>
        <Apartment_Wrapper>
          {apartment.map((value) => {
            return (
              <Map_Wrapper key={value.id}>
                <House_Icons src={value.icon} />
                <House_Name>{value.name}</House_Name>
              </Map_Wrapper>
            );
          })}
        </Apartment_Wrapper>
      </ExploreWrapper>
      <Trends>
        <Trends_Wrapper>
          <Trends_Word>TRENDS</Trends_Word>
          <Trends_BigWord>
            Vermont Farmhouse With Antique Jail Is the Week's Most Popular Home
          </Trends_BigWord>
          <Read_Button>
            <Trends_Word>READ MORE</Trends_Word>
          </Read_Button>
        </Trends_Wrapper>
      </Trends>
      <Agent_Wrapper>
        <AgWord_Wrapper>
          <Agent_Word>Become A Real Estate Agent</Agent_Word>
          <AgSmall_Word>
            We only work with best companies around the globe
          </AgSmall_Word>
          <Now_Button>REGISTER NOW</Now_Button>
        </AgWord_Wrapper>
      </Agent_Wrapper>
      <Contactbar>
        <Bigicon>
          <Webbar>
            <Contactus>Contact Us</Contactus>
            <Addressone>
              <Iconaddress src={address} />
              <Street>
                329 Queensberry Street, North Melbourne VIC 3051, Australia.
              </Street>
            </Addressone>
            <Addresstwo>
              <Iconaddresstwo src={tell} />
              <Streetwo>123 456 7890</Streetwo>
            </Addresstwo>
            <Addressthree>
              <Iconaddressthree src={message} />
              <Streethree>support@houzing.com</Streethree>
            </Addressthree>
            <Website>
              <Face src={facebook} />
              <Twit src={twitter} />
              <Insta src={instagram} />
              <Intime src={intime} />
            </Website>
          </Webbar>
        </Bigicon>
        <br />
        <Discover>
          <Discoverword>Discover</Discoverword>
          <Chicago>Chicago</Chicago>
          <Chicago>Los Angeles</Chicago>
          <Chicago>Miami</Chicago>
          <Chicago>New York</Chicago>
        </Discover>
        <Discover>
          <Discoverword>List By Categories</Discoverword>
          <Chicago>Apartments</Chicago>
          <Chicago>Condos</Chicago>
          <Chicago>Houses</Chicago>
          <Chicago>Offices</Chicago>
          <Chicago>Retail</Chicago>
          <Chicago>Villas</Chicago>
        </Discover>
        <Discover>
          <Discoverword>Quick Links</Discoverword>
          <Chicago>Abiut US</Chicago>
          <Chicago>Terms & Conditions</Chicago>
          <Chicago>User's guide</Chicago>
          <Chicago>Support Center </Chicago>
          <Chicago>Press Info</Chicago>
          <Chicago>Contact us</Chicago>
        </Discover>{" "}
        <Discover>
          <Discoverword>Subscribe</Discoverword>
          <Chicago>We don;t spam so don't worry</Chicago>
          <Email_Wrapper>
            <Email_Input type="email" placeholder="Enter your email " />
            <Telegram>
              <TelegramIcon />
            </Telegram>
          </Email_Wrapper>
        </Discover>
      </Contactbar>
    </Container>
  );
};
export default Homepage;
