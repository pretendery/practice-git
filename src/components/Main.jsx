import { hot } from 'react-hot-loader/root';
import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
  color: blue;
`;

function Main() {
  return (
    <Text>
      Production Success!
      <span role="img" aria-label="laugh">
        😆
      </span>
    </Text>
  );
}

export default hot(Main);
