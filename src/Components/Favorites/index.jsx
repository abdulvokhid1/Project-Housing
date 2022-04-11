import React from "react";
import { Container, Favorite, Favourie_Word, Small_Word } from "./style";
export const Favorites = () => {
  return (
    <Container>
      <Favorite>
        <Favourie_Word>Favourites</Favourie_Word>
        <Small_Word>Ready to jump back in?</Small_Word>
      </Favorite>
    </Container>
  );
};

export default Favorites;
