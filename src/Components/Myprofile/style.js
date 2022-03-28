import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 800px;
  background: #e5e5e5;
  display: flex;
  border: 1px solid black;
`;
// const Dashbar = styled.div`
//   flex: 2;
//   /* width: 200px; */
//   background: #ffffff;
// `;
const Wrapper = styled.div`
  flex: 10;
  border: 1px solid red;
  padding: 40px 40px;
`;
const Wordone = styled.div`
  border: 1px solid black;
  width: 260px;
  margin-left: 10px;
`;
const Darrel = styled.h1`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 38px;
  color: #0d263b;
`;
const Ready = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #696969;
  margin-top: -17px;
  margin-left: 3px;
`;

const Makingmap = styled.div`
  display: flex;
  margin-top: 50px;
  border: 1px solid black;
`;
const Maps = styled.div`
  border: 1px solid blue;
  width: 250px;
  height: 125px;
  margin-left: 10px;
  margin-right: 20px;
  background: #ffffff;
  /* Border / Color */

  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  text-align: center;
  /* align-items: center; */
`;
const Value_amout = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 38px;
  /* text-align: center; */
  color: #0061df;
`;
const Value_title = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  color: #0d263b;
  /* text-align: center; */
  margin-top: -20px;
`;

export {
  Value_title,
  Value_amout,
  Maps,
  Makingmap,
  Wordone,
  Ready,
  Darrel,
  Container,
  Wrapper,
};
