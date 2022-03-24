import React, { useState } from "react";
// import bigicon from "../Assets/icons/bigicon.png";
import {
  Account,
  Accountsmall,
  Container,
  Wrapper,
  Registerpage,
  Signinpage,
  Registrationpage,
  Contactbar,
  Bigicon,
  Contactus,
  Webbar,
  Wrappersign,
} from "./style";
import { useNavigate } from "react-router-dom";

const { REACT_APP_BASE_URL: url } = process.env;
export const Signin = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const login = () => {
    fetch(`${url}/public/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res?.data);
        if (res?.success && res?.data) {
          navigate("/myprofile");
        }
      });
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <Container>
      <Wrapper>
        <Account>Account</Account>
        <Accountsmall>Home/MyAccount</Accountsmall>
      </Wrapper>
      <Registerpage>
        <Signinpage>
          <Wrappersign>
            <h1>login</h1>
            <input
              value={state.email}
              name="email"
              type="email"
              placeholder="enter you email"
              onChange={onChange}
            />
            <input
              value={state.password}
              name="password"
              type="password"
              placeholder="enter your password"
              onChange={onChange}
            />
            <br />
            <button onClick={login}>register</button>
          </Wrappersign>
        </Signinpage>
        <Registrationpage>Register</Registrationpage>
      </Registerpage>
      <Contactbar>
        <Bigicon>
          <Webbar>
            <Contactus>Contact Us</Contactus>
          </Webbar>
        </Bigicon>
      </Contactbar>
    </Container>
  );
};
export default Signin;
