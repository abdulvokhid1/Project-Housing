import styled from "styled-components";
import term from "../Assets/images/term.png";

const Container = styled.div`
  display: flex;
  /* flex-direction: column; */
  position: relative;
  /* background: black; */
  /* background: ${`url(${term})`}; */
  height: 130px;
  background-size: 100% 100%;
  object-fit: cover;
  background-repeat: no-repeat;
  /* border: 1px solid red; */
  border-bottom: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  align-items: center;
  justify-content: space-between;
  position: sticky;
`;
const Iconhouzing = styled.div`
  display: flex;
  align-items: center;

  margin-left: 200px;
`;
const Houseicon = styled.img`
  /* background: blue; */
  width: 40px;
  height: 48px;
`;
const Wordhouse = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 32px;
  color: black;
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
  margin: 0 20px;
  color: black;
`;

const Buttonlist = styled.div`
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #0061df;
  width: 120px;
  height: 33px;
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
