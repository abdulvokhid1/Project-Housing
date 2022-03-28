import React from "react";
import {
  Container,
  Center,
  Wrapper,
  Darrel,
  Ready,
  Wordone,
  Makingmap,
  Maps,
  Value_map,
  Value_amout,
  Value_title,
} from "./style";
import Dashboard from "../Dashboard";
import { Wordme } from "../SingIn/style";
import { proporty } from "../../Utils/mock";
// import home from "../Assets/icons/home.png";
export const Myprofile = () => {
  return (
    <Container>
      <Dashboard />
      <Wrapper>
        <Wordone>
          <Darrel>Howdy,Darrell!</Darrel>
          <Ready>Rady to jump back in?</Ready>
        </Wordone>
        <Makingmap>
          {proporty.map((value) => {
            return (
              <Maps>
                <Value_amout>{value.amount}</Value_amout>
                <Value_title>{value.title}</Value_title>
              </Maps>
            );
          })}
        </Makingmap>
      </Wrapper>
    </Container>
  );
};
export default Myprofile;
