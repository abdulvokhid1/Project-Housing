import styled from "styled-components";
// const SideWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
// `;
const AllWrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
`;
const BigContainer = styled.div`
  /* align-items: center; */
  display: flex;
`;
const Container = styled.div`
  background: grey;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  /* margin-top: 230px; */
  width: 230px;
  /* height: 100%; */
`;
const Mapwrapper = styled.h1`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 56px;
  color: #0d263b;
  margin: 0 10px;
  align-items: center;
`;

export { AllWrapper, BigContainer, Container, Mapwrapper };
