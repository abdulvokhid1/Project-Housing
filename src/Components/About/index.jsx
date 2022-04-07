import React from "react";
import {
  About_Word,
  About_Wrapper,
  Container,
  Houzing,
  Little_Word,
  Mission,
  Word_Wrapper,
  Lorem,
  Card,
  Cardone,
  Cardtwo,
  Black_Word,
  Light,
  Small_Flex,
  Open,
  Flex,
  Number,
} from "./style";
import card from "../Assets/images/card.png";

export const About = () => {
  return (
    <Container>
      <About_Wrapper>
        <Word_Wrapper>
          <About_Word>About Us</About_Word>
          <Little_Word>Home/About Us </Little_Word>
        </Word_Wrapper>
      </About_Wrapper>
      <Mission>
        <div>
          <Houzing>Our Mission Is To Houzing</Houzing>
          <Lorem>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </Lorem>
        </div>
        <Card>
          <Cardone src={card} />
          <Cardtwo>
            <Black_Word>
              Mauris ac consectetur ante, dapibus gravida tellus. Nullam aliquet
              eleifend dapibus. Cras sagittis, ex euismod lacinia tempor
            </Black_Word>
            <Light>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              quis ligula eu lectus vulputate porttitor sed feugiat nunc. Mauris
              ac consectetur ante, dapibus gravida tellus. Nullam aliquet
              eleifend dapibus. Cras sagittis, ex euismod lacinia tempor, lectus
              orci elementum augue, eget auctor metus ante sit amet velit.
            </Light>
            <Light>
              Maecenas quis viverra metus, et efficitur ligula. Nam congue augue
              et ex congue, sed luctus lectus congue. Integer convallis
              condimentum sem. Duis elementum tortor eget condimentum tempor.
              Praesent sollicitudin lectus ut pharetra pulvinar. Donec et libero
              ligula. Vivamus semper at orci at placerat.Placeat Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Quod libero amet,
              laborum qui nulla quae alias tempora.
            </Light>
            <Light>
              That’s why we go beyond the typical listings, by sourcing insights
              straight from locals and offering over 34 neighborhood map
              overlays, to give people a deeper understanding of what living in
              a home and neighborhood is really like.
            </Light>
          </Cardtwo>
        </Card>
        <Flex>
          <Small_Flex>
            <Number>66.180</Number>
            <Open>HOMES FOR SALE</Open>
          </Small_Flex>
          <Small_Flex>
            <Number>4.809</Number>
            <Open>OPEN HOUSES</Open>
          </Small_Flex>
          <Small_Flex>
            <Number>30.469</Number>
            <Open>RECENTLY SOLD</Open>
          </Small_Flex>
          <Small_Flex>
            <Number>2.919</Number>
            <Open>PRICE REDUCED</Open>
          </Small_Flex>
        </Flex>
      </Mission>
    </Container>
  );
};
export default About;
