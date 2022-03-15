import styled from "styled-components";
import { ReactComponent as term } from "../Assets/images/term.png";

const Container = styled.div`
  display: flex;
  background: grey;

  height: 70px;
  border: 1px solid red;
  align-items: center;
  justify-content: space-between;
`;
const Iconhouzing = styled.div`
  display: flex;
  align-items: center;

  margin-left: 255px;
`;
const Houseicon = styled.img`
  /* background: black; */
  width: 40px;
  height: 48px;
`;
const Wordhouse = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 32px;
  color: #ffffff;
  margin-left: 14px;
`;

const Searchbar = styled.div`
  align-items: center;
  display: flex;
  margin-right: 230px;
`;

const Home = styled.div`
  display: flex;
`;
const Homemap = styled.h1`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 17px;
  text-transform: uppercase;
  margin: 0 10px;

  color: #ffffff;
`;

const Buttonlist = styled.div`
  background: #ffffff;
  border-radius: 3px;
  width: 140px;
  height: 35px;
  align-items: center;
`;
const Create = styled.div`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 17px;
  text-transform: uppercase;
  color: #0061df;
  align-items: center;
  text-align: center;
  margin-top: 8px;
`;
export {
  Create,
  Buttonlist,
  Homemap,
  Home,
  Searchbar,
  Wordhouse,
  Container,
  Iconhouzing,
  Houseicon,
};
