import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  /* border: 1px solid black; */
  height: 930px;
  background: #e5e5e5;
`;

const Prop = styled.div`
  /* border: 1px solid black; */
  margin-left: 50px;
  margin-top: 60px;
  width: 250px;
`;
const Prop_Word = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 38px;

  /* Color / 2 */

  color: #0d263b;
`;
const Small_Word = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #696969;
  margin-top: -30px;
`;
const Map_Wrapper = styled.div`
  background: #ffffff;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  height: 650px;
  width: 1156px;
  margin-left: 50px;
  margin-top: 60px;
`;
const Copyright = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height */

  /* Text / Color */

  color: #696969;
  text-align: center;
  margin-top: 27px;
`;
export { Copyright, Map_Wrapper, Prop_Word, Small_Word, Prop, Container };
