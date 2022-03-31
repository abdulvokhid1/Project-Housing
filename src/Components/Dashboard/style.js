import styled from "styled-components";
const AllWrapper = styled.div`
  width: 100%;
  height: 1300px;
  display: flex;
`;
const BigContainer = styled.div`
  display: flex;
`;
const Container = styled.div`
  width: 300px;
  background: #ffffff;
  /* display: flex; */
  border: 1px solid black;
`;
const Wrapper = styled.div`
  align-items: center;
  margin-left: 46px;
`;

const Mapwrapper = styled.h1`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 56px;
  color: #0d263b;
  margin: 0 10px;
`;

export { AllWrapper, Mapwrapper, Wrapper, Container, BigContainer };
