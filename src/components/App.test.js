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
  test('displays start/pause button', () => {
    const { container } = render(<App />);
    const actual = container.querySelector('button').textContent;
    expect(actual).toBe('Start');
  });
  test.skip('displays pause button', () => {
    const { container } = render(<App />);
    const button = container.querySelector('button');
    Simulate.click(button);
    expect(button.textContent).toBe('Pause');
  });

  test.skip('displays start button after 2 clicks', () => {
    const { container } = render(<App />);
    const button = container.querySelector('button');
    Simulate.click(button);
    Simulate.click(button);
    expect(button.textContent).toBe('Start');
  });
});
