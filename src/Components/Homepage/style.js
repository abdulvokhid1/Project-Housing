import styled from "styled-components";
import landing from "../Assets/images/landing.jpg";

const Container = styled.div`
  width: 100%;
  height: 1500px;
`;

const Search = styled.div`
  width: 100%;
  height: 700px;
  background: ${`url(${landing})`};
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

export { Container, Search };
