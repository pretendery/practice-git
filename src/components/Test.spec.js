import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import React from 'react';

import Test from './Test';

describe('test set up', () => {
  it('get initial value', () => {
    render(<Test />);
    expect(screen.getByText('Hello there, John')).toBeInTheDocument();
  });

  it('get new value from prop', () => {
    render(<Test greeting="Hi" />);
    expect(screen.getByText('Hi there, John')).toBeInTheDocument();
  });

  it('test function', () => {
    const testFunc = jest.fn();
    const { rerender } = render(<Test testFunc={testFunc} />);
    expect(testFunc).toHaveBeenCalledTimes(1);
    rerender(<Test greeting="best" testFunc={testFunc} />);
    expect(testFunc).toHaveBeenCalledTimes(2);
    rerender(<Test greeting="best" testFunc={testFunc} />);
    expect(testFunc).toHaveBeenCalledTimes(2);
    rerender(<Test greeting="hi" testFunc={testFunc} />);
    expect(testFunc).toHaveBeenCalledTimes(3);
  });
});
