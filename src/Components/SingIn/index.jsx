import React, { useState } from "react";
// import bigicon from "../Assets/icons/bigicon.png";
import password from "../Assets/icons/password.png";
import address from "../Assets/icons/address.png";
import tell from "../Assets/icons/tell.png";
import message from "../Assets/icons/message.png";
import facebook from "../Assets/icons/facebook.png";
import instagram from "../Assets/icons/instagram.png";
import intime from "../Assets/icons/intime.png";
import twitter from "../Assets/icons/twitter.png";
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
  Signword,
  Inputword,
  Divinput,
  Loginword,
  Divregister,
  Passwordword,
  Divremember,
  Rememberme,
  Forgot,
  Iconpasword,
  Wordme,
  Divbutton,
  Username,
  Agensy,
  Demo,
  Wordreg,
  Regbutton,
  Loginput,
  Nameinput,
  Lastinput,
  Userinput,
  Passinput,
  Repassinput,
  Emailinput,
  Littlebar,
  Addressone,
  Iconaddress,
  Street,
  Iconaddresstwo,
  Streetwo,
  Addresstwo,
  Addressthree,
  Iconaddressthree,
  Streethree,
  Website,
  Face,
  Insta,
  Intime,
  Twit,
  Discover,
  Discoverword,
  Chicago,
  Miami,
  New,
  Los,
} from "./style";
import { useNavigate } from "react-router-dom";

const { REACT_APP_BASE_URL: url } = process.env;
export const Signin = () => {
  const navigate = useNavigate();
  console.log(url);
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
          navigate(-1);
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
          <Signword>Sign in</Signword>
          <Divinput>
            <Loginword>Login</Loginword>
            <Inputword
              value={state.email}
              name="email"
              type="email"
              placeholder="Email"
              onChange={onChange}
            />
          </Divinput>
          <Divregister>
            <Passwordword
              value={state.password}
              name="password"
              type="password"
              placeholder="Password"
              onChange={onChange}
            />
            <Divremember>
              <Rememberme>
                <Iconpasword src={password} />
                <Wordme>Remember me</Wordme>
              </Rememberme>
              <Forgot>Forgot</Forgot>
            </Divremember>
          </Divregister>
          <Divbutton onClick={login}>Sign In</Divbutton>
          <Username>
            <Agensy>Username: agency or agent</Agensy>
            <Demo>Password: demo</Demo>
          </Username>
        </Signinpage>
        <Registrationpage>
          <Littlebar>
            <Wordreg>Registration</Wordreg>
            <Loginput type="text" placeholder="login" />
            <Nameinput type="text" placeholder="First name" />
            <Lastinput type="text" placeholder="Last name" />
            <Emailinput type="email" placeholder="Email" />
            <Userinput type="text" placeholder="User role" />
            <Passinput type="password" placeholder="Password" />
            <Repassinput type="password" placeholder="Re-enter password" />
            <Regbutton>Register</Regbutton>
          </Littlebar>
        </Registrationpage>
      </Registerpage>
      <Contactbar>
        <Bigicon>
          <Webbar>
            <Contactus>Contact Us</Contactus>
            <Addressone>
              <Iconaddress src={address} />
              <Street>
                329 Queensberry Street, North Melbourne VIC 3051, Australia.
              </Street>
            </Addressone>
            <Addresstwo>
              <Iconaddresstwo src={tell} />
              <Streetwo>123 456 7890</Streetwo>
            </Addresstwo>
            <Addressthree>
              <Iconaddressthree src={message} />
              <Streethree>support@houzing.com</Streethree>
            </Addressthree>
            <Website>
              <Face src={facebook} />
              <Twit src={twitter} />
              <Insta src={instagram} />
              <Intime src={intime} />
            </Website>
          </Webbar>
        </Bigicon>
        <br />
        <Discover>
          <Discoverword>Discover</Discoverword>
          <Chicago>Chicago</Chicago>
          <Los>Los Angeles</Los>
          <Miami>Miami</Miami>
          <New>New York</New>
        </Discover>
      </Contactbar>
    </Container>
  );
};
export default Signin;
