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
  opacity: 0.6;
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
const Centerdiv = styled.div`
  border: 1px solid red;
  width: 300px;
  height: 200px;
  /* margin-top: 40px; */
  justify-content: center;
  background: lightblue;
`;

export { Centerdiv, Middle, Container, Search };
