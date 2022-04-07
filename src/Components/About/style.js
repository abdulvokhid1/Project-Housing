import styled from "styled-components";
import landing from "../Assets/images/landing.png";

const Container = styled.div`
  width: 100%;

  height: 2500px;
  border: 1px solid black;
`;
const About_Wrapper = styled.div`
  border: 1px solid black;
  height: 250px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #7a8691;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${landing});
  background-repeat: no-repeat;
  background-size: cover;
  background-size: 1620px 260px;
`;
const Word_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 700px;
`;
const About_Word = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 38px;
  text-align: center;
  color: #ffffff;
`;
const Little_Word = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
  margin-top: -20px;
`;
const Mission = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  border: 1px solid black;
  height: 1000px;
`;
const Houzing = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 38px;
  text-align: center;
  text-align: center;
  color: #0d263b;
  margin-top: 60px;
`;
const Lorem = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #696969;
  text-align: center;
  margin-top: -20px;
`;
const Card = styled.div`
  display: flex;
  width: 100%;
  height: 600px;
  /* border: 1px solid black; */
  margin-top: 40px;
  justify-content: space-between;
`;
const Cardone = styled.img`
  width: 500px;
  height: 500px;
  margin-left: 150px;
`;
const Cardtwo = styled.div`
  width: 550px;
  height: 300px;
  margin-right: 170px;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
`;
const Black_Word = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #0d263b;
`;
const Light = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
  text-align: center;
  color: #696969;
`;
const Flex = styled.div`
  display: flex;
  margin-left: 200px;
`;
const Small_Flex = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 150px;
`;
const Number = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 38px;
  text-align: center;

  /* Color / 1 */

  color: #0061df;
`;
const Open = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 30px;
  /* identical to box height, or 171% */
  margin-top: -30px;
  text-align: center;
  text-transform: uppercase;

  /* Text / Color */

  color: #696969;
`;
export {
  Small_Flex,
  Number,
  Open,
  Flex,
  Light,
  Black_Word,
  Cardone,
  Cardtwo,
  Card,
  Houzing,
  Lorem,
  Mission,
  Word_Wrapper,
  About_Word,
  Little_Word,
  About_Wrapper,
  Container,
};
