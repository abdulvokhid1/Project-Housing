import React from "react";
import { dashbar } from "../../Utils/mock";
import { Container, Mapwrapper, Wrapper } from "./style";

export const Dashboard = () => {
  return (
    <Container>
      {dashbar.map((value) => {
        return (
          <Wrapper>
            <Mapwrapper>{value.title}</Mapwrapper>
          </Wrapper>
        );
      })}
    </Container>
  );
};
export default Dashboard;
