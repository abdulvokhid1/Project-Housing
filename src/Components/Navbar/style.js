import styled from "styled-components";
import { ReactComponent as term } from "../Assets/images/term.png";
const Container = styled.div`
  border: 1px solid red;
  height: 600px;
  background: grey;
`;

const Housing = styled.div`
  display: flex;
  height: 70px;
  border: 1px solid red;
  align-items: center;
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
export { Wordhouse, Container, Housing, Iconhouzing, Houseicon };
