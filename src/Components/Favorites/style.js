import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 930px;
  background: #f9f8f8;
`;
const Favorite = styled.div`
  margin-left: 50px;
  margin-top: 60px;
  width: 250px;
`;
const Favourie_Word = styled.p`
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
export { Favourie_Word, Small_Word, Favorite, Container };
