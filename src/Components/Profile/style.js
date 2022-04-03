import styled from "styled-components";

const Container = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 1320px;
  /* margin: 30px 30px; */
  /* padding: 40px 40px; */
  background: #e5e5e5;
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.div``;
const Word_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid black; */
  width: 200px;
  height: 130px;
  margin-left: 50px;
  margin-top: 30px;
`;
const Pro_Word = styled.p`
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
  margin-top: -30px;
  color: #696969;
`;
const Table_Wrapper = styled.div`
  border: 1px solid black;
  display: flex;
  margin-left: 50px;
  /* margin-right: 50px; */
  margin-top: 40px;
  width: 1160px;
  display: flex;
  background: #ffffff;
  /* Border / Color */

  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  /* flex-direction: column; */
`;
const Contact_Table = styled.div`
  /* background: red; */
  height: 700px;
  width: 810px;
  display: flex;
  flex-direction: column;
`;
const First_Container = styled.div`
  display: flex;
`;
const Input_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 170px;
  margin-left: 30px;
`;
const Name_Input = styled.input`
  border: none;
  border-bottom: 1px solid #e6e9ec;
  margin-top: 25px;
`;
const Email_Input = styled.input`
  border: none;
  border-bottom: 1px solid #e6e9ec;
  margin-top: 25px;
`;
const Mob_Input = styled.input`
  border: none;
  /* border: hidden; */
  border-bottom: 1px solid #e6e9ec;
  margin-top: 25px;
`;
const Email_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  margin-left: 30px;
`;
const Last_Input = styled.input`
  border: none;
  border-bottom: 1px solid #e6e9ec;
  margin-top: 25px;
`;
const Phone_Input = styled.input`
  border: none;
  border-bottom: 1px solid #e6e9ec;
  margin-top: 25px;
`;
const Skype_Input = styled.input`
  border: none;
  border-bottom: 1px solid #e6e9ec;
  margin-top: 25px;
`;
const Social = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #0d263b;
`;
const Second_Container = styled.div`
  display: flex;
`;
const Media_Input = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 170px;
  margin-left: 30px;
`;
const Twitter = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  margin-left: 30px;
`;
const Contact = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #0d263b;
`;

const Photo_Table = styled.div`
  background: blue;
  height: 410px;
  width: 320px;
  margin-left: 57px;
`;
const Change_Wrapper = styled.div`
  border: 1px solid black;
  width: 790px;
  height: 250px;
  margin-left: 50px;
  margin-top: 30px;
`;
const Last_Word = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #696969;
  text-align: center;
  margin-top: 62px;
`;
export {
  Twitter,
  Media_Input,
  Last_Input,
  Phone_Input,
  Skype_Input,
  Email_Input,
  Mob_Input,
  Name_Input,
  Social,
  Input_Wrapper,
  Email_Wrapper,
  First_Container,
  Second_Container,
  Contact,
  Last_Word,
  Change_Wrapper,
  Contact_Table,
  Photo_Table,
  Table_Wrapper,
  Word_Wrapper,
  Pro_Word,
  Small_Word,
  Wrapper,
  Container,
};
