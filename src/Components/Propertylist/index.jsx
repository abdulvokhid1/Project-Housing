import React, { useEffect, useState } from "react";
import {
  Container,
  Copyright,
  Map_Wrapper,
  Prop,
  Prop_Word,
  Small_Word,
} from "./style";
const { REACT_APP_BASE_URL: url } = process.env;
export const Propertylist = () => {
  // console.log(process.env);
  // const [state, setState] = useState();

  // useEffect(() => {
  //   fetch(`${url}/v1//houses`, {
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem("token")}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res);
  //       localStorage.setItem("token", res?.data);
  //     });
  // }, []);
  return (
    <Container>
      <Prop>
        <Prop_Word>My Proporties</Prop_Word>
        <Small_Word>Ready to jump back in?</Small_Word>
      </Prop>
      <Map_Wrapper></Map_Wrapper>
      <Copyright>
        Copyright © 2021 CreativeLayers. All Right Reserved.
      </Copyright>
    </Container>
  );
};

export default Propertylist;

// body malumot jonatganda back end ga 'Content Type':'application/json'
