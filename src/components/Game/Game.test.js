import React from 'react';
import Game from './Game';
import { render } from 'react-testing-library';

describe('Test Game', () => {
  test('displays section', () => {
    const { container } = render(<Game />);
    const actual = container.querySelector('section');
    expect(actual).toBeTruthy();
  });
});
