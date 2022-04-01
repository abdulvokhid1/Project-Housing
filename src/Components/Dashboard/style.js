import styled from "styled-components";
const BigWrapper = styled.div`
  width: 100%;
  height: 800px;
  background: #e5e5e5;
  display: flex;
  /* flex-direction: column; */
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #e5e5e5;
  display: flex;
  /* flex-direction: column; */
  /* border: 1px solid black; */
`;
// const Dashbar = styled.div`
//   flex: 2;
//   /* width: 200px; */
//   background: #ffffff;
// `;
const Wrapper = styled.div`
  flex: 10;
  padding: 40px 40px;
`;
const Wordone = styled.div`
  /* border: 1px solid black; */
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
  /* border: 1px solid black; */
`;
const Maps = styled.div`
  border: 1px solid blue;
  width: 250px;
  height: 125px;
  margin-left: 10px;
  margin-right: 20px;
  background: #ffffff;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  text-align: center;
`;
const Value_amout = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 38px;
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
const Tablewrapper = styled.div`
  display: flex;
  /* border: 1px solid blue; */
  margin-top: 30px;
  width: 1100px;
  margin-left: 10px;
`;
const Table = styled.div`
  /* border: 1px solid red; */
  height: 370px;
  width: 700px;
  background: #ffffff;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  /* padding: 0 10px; */
`;
const Listing = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  margin-left: 25px;

  /* Color / 2 */

  color: #0d263b;
`;
const Img = styled.img`
  width: 650px;
  margin-top: -15px;
  margin-left: 25px;
`;
const Activity = styled.div`
  /* border: 1px solid red; */
  height: 370px;
  width: 400px;
  margin-left: 30px;
  background: #ffffff;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
`;
const Column = styled.div`
  margin-left: 30px;
  margin-right: 30px;
`;
const Word_act = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;

  /* Color / 2 */

  color: #0d263b;
`;
const Still = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #696969;
  margin-top: 27px;
  margin-bottom: 27px;
`;
const Copyright = styled.div`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #696969;
  align-items: center;
  text-align: center;
  margin-top: 50px;
`;
export {
  BigWrapper,
  Word_act,
  Still,
  Column,
  Listing,
  Img,
  Copyright,
  Table,
  Activity,
  Tablewrapper,
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
