import styled from "styled-components";
import landing from "../Assets/images/landing.jpg";

const Container = styled.div`
  width: 100%;
  height: 1500px;
  position: absolute;
  position: sticky;
`;

const Search = styled.div`
  width: 100%;
  height: 700px;
  background: ${`url(${landing})`};
  background-repeat: no-repeat;
  background-size: 100% 100%;
  /* opacity: 0.6; */
`;

const Centerdiv = styled.div`
  border: 1px solid red;
  width: 600px;
  height: 400px;
  /* margin-top: 40px; */
  justify-content: center;
  background: red;
`;
const Middle = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  margin: auto;
`;
const Middlebig = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 76px;
  text-align: center;
  color: #ffffff;
`;
const Buymap = styled.div`
  display: flex;
  margin-left: 210px;
`;
const Buy = styled.p`
  display: flex;
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  margin: 10px 10px;
  /* Color / 5 */

  color: #ffffff;
`;
const Button = styled.div`
  background: #ffffff;
  box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
  border-radius: 3px;
  border: 1px solid black;
  height: 50px;
`;
const Type = styled.p`
  border-bottom: 1px solid black;
  width: 190px;
`;
const Location = styled.p``;
const Searchword = styled.p``;

export {
  Type,
  Location,
  Searchword,
  Button,
  Buy,
  Buymap,
  Middlebig,
  Centerdiv,
  Middle,
  Container,
  Search,
};
