import React, { useState, useEffect } from 'react';
import { string, func } from 'prop-types';
import { hot } from 'react-hot-loader/root';

function Test({ greeting, testFunc }) {
  const [user, setUser] = useState('John');
  const [gMsg, setGMsg] = useState('');
  const changeUser = () => {
    setUser('Kim');
  };
  useEffect(() => {
    testFunc() || setGMsg(`${greeting} there`);
  }, [greeting, testFunc]);
  return (
    <>
      <button type="button" onClick={changeUser}>
        Change user
      </button>
      <div>
        {gMsg}, {user}
      </div>
    </>
  );
}

Test.defaultProps = {
  greeting: 'Hello',
  testFunc: () => {},
};

Test.propTypes = {
  greeting: string,
  testFunc: func,
};

export default hot(Test);
