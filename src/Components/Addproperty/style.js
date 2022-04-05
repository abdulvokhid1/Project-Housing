import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  border: 1px solid black;
  height: 930px;
  background: #e5e5e5;
`;

const Adding_Wrapper = styled.div`
  /* border: 1px solid black; */
  margin-left: 50px;
  margin-top: 60px;
  width: 350px;
`;
const Add_Word = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 38px;

  /* Color / 2 */

  color: #0d263b;
`;
const New_Word = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #696969;
  margin-top: -30px;
`;
export { Container, Add_Word, Adding_Wrapper, New_Word };
