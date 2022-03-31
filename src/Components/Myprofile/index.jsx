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
  Tablewrapper,
  Activity,
  Table,
  Copyright,
  Img,
  Listing,
  Column,
  Still,
  Word_act,
} from "./style";
import Dashboard from "../Dashboard";
import { Wordme } from "../SingIn/style";
import { proporty } from "../../Utils/mock";
import tablecut from "../Assets/images/tablecut.png";
import { recentcode } from "../../Utils/mock";
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
              <Maps key={value.id}>
                <Value_amout>{value.amount}</Value_amout>
                <Value_title>{value.title}</Value_title>
              </Maps>
            );
          })}
        </Makingmap>
        <Tablewrapper>
          <Table>
            <Listing>Listings Views</Listing>
            <Img src={tablecut} alt="" />
          </Table>
          <Activity>
            <Column>
              <Word_act>Recent Activities</Word_act>
              {recentcode.map((value) => {
                return <Still key={value.id}>{value.title}</Still>;
              })}
            </Column>
          </Activity>
        </Tablewrapper>
        <Copyright>
          Copyright © 2021 CreativeLayers. All Right Reserved.
        </Copyright>
      </Wrapper>
    </Container>
  );
};
export default Myprofile;
