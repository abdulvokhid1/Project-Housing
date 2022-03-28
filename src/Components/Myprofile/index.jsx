import React from "react";
import { Container, Dashbar, Center } from "./style";
import Dashboard from "../Dashboard";
export const Myprofile = () => {
  return (
    <Container>
      <Dashboard></Dashboard>
      <Center>
        <h1>Centerbar</h1>
      </Center>
    </Container>
  );
};
export default Myprofile;
