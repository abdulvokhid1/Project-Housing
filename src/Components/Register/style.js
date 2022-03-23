import styled from "styled-components";

const Container = styled.div`
  height: 1300px;
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
  border: 1px solid black;
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
`;
const Registrationpage = styled.div`
  height: 500px;
  width: 500px;
  border: 1px solid red;
  flex: 1;
  margin-right: 225px;
  margin-left: 15px;
  margin-top: 30px;
`;

export {
  Signinpage,
  Registrationpage,
  Registerpage,
  Container,
  Wrapper,
  Account,
  Accountsmall,
};
