import React from 'react';
import App from './App';
import { render, Simulate } from 'react-testing-library';

describe('test App', () => {
  test('displays title', () => {
    const { container } = render(<App />);
    const actual = container.querySelector('h1').textContent;
    expect(actual).toBe('FAC Match');
  });

  test('displays instructions', () => {
    const { container } = render(<App />);
    const actual = container.querySelector('p');
    expect(actual).toBeTruthy();
  });
  test('displays New Game button', () => {
    const { container } = render(<App />);
    const actual = container.querySelector('button').textContent;
    expect(actual).toBe('New Game');
  });
  test('starts game', () => {
    const { container } = render(<App />);
    const start = container.querySelector('button').textContent;
    Simulate.click(start);
    const actual = container.querySelector('img');
    expect(actual).toBeTruthy;
  });
});
