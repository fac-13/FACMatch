import React from 'react';
import StartPause from './StartPause';
import { render } from 'react-testing-library';

describe('Test StartPause', () => {
  test('displays children', () => {
    const { container } = render(<StartPause>children</StartPause>);
    const button = container.querySelector('button');
    expect(button.textContent).toBe('children');
  });
});
