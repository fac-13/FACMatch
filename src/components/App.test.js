import React from 'react';
import App from './App';
import { render } from 'react-testing-library';

describe('test App', () => {
  test('test App displays title', () => {
    const { container } = render(<App />);
    const actual = container.querySelector('h1').textContent;
    expect(actual).toBe('FAC Match');
  });
});
