import React from "react";
import {
  Account,
  Accountsmall,
  Container,
  Wrapper,
  Registerpage,
  Signinpage,
  Registrationpage,
} from "./style";

export const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Account>Account</Account>
        <Accountsmall>Home/MyAccount</Accountsmall>
      </Wrapper>
      <Registerpage>
        <Signinpage></Signinpage>
        <Registrationpage></Registrationpage>
      </Registerpage>
    </Container>
  );
};
export default Register;
