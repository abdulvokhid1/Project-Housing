import React from "react";
import { dashbar } from "../../Utils/mock";
import { Container, Mapwrapper, Wrapper } from "./style";

export const Dashboard = () => {
  return (
    <Container>
      {dashbar.map((value) => {
        return (
          <Wrapper key={value.id}>
            <Mapwrapper>{value.title}</Mapwrapper>
          </Wrapper>
        );
      })}
    </Container>
  );
};
export default Dashboard;
