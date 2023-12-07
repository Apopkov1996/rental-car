import React from 'react';
import { Button, MainWrapper, Span, Text } from './Home.styled';

const Home = () => {
  return (
    <MainWrapper>
      <Text>
        Open the World with <Span>RENTAL-CAR </Span> <br />
        Comfortable and Modern Cars
      </Text>
      <Button to={'/catalog'}>Go to Catalog</Button>
    </MainWrapper>
  );
};

export default Home;
