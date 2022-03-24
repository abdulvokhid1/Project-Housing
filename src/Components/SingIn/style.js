import styled from "styled-components";
import bigicon from "../Assets/icons/bigicon.png";

const Container = styled.div`
  height: 1220px;
  width: 100%;
  border: 1px solid red;
  background: #e5e5e5;
`;
const Wrapper = styled.div`
  background: grey;
  height: 200px;
  display: flex;
  flex-direction: column;
`;
const Account = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 38px;
  text-align: center;
  color: #ffffff;
`;
const Accountsmall = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
`;
const Registerpage = styled.div`
  display: flex;
  /* border: 1px solid black; */
  height: 600px;
`;
const Signinpage = styled.div`
  height: 400px;
  width: 500px;
  border: 1px solid red;
  flex: 1;
  margin-left: 225px;
  margin-right: 15px;
  margin-top: 30px;
  /* background: #ffffff; */
`;
const Registrationpage = styled.div`
  height: 500px;
  width: 500px;
  border: 1px solid red;
  flex: 1;
  margin-right: 225px;
  margin-left: 15px;
  margin-top: 30px;
  background: #ffffff;
`;
const Wrappersign = styled.div`
  margin-top: 50px;
`;
const Wrapperregister = styled.div``;
const Contactbar = styled.div`
  height: 420px;
  border: 1px solid black;
  background: #0d263b;
`;

const Bigicon = styled.div`
  height: 350px;
  border: 1px solid black;
  width: 290px;
  margin-left: 50px;
  margin-top: 43px;
  background: ${`url(${bigicon})`};
  background-size: cover;
`;
const Webbar = styled.div``;
const Contactus = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
`;
const Addressone = styled.div``;
export {
  Wrapperregister,
  Wrappersign,
  Contactus,
  Webbar,
  Bigicon,
  Contactbar,
  Signinpage,
  Registrationpage,
  Registerpage,
  Container,
  Wrapper,
  Account,
  Accountsmall,
};
