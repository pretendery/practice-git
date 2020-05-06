import { hot } from 'react-hot-loader/root';
import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
  color: orange;
`;

function Main() {
  return <Text>Develop Environment Ready!</Text>;
}

export default hot(Main);
