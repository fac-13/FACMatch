import React from 'react';
import Header from './Header';
import { render } from 'react-testing-library';

describe('Test Header', () => {
  test('displays children', () => {
    const { container } = render(<Header>children</Header>);
    const button = container.querySelector('button');
    expect(button.textContent).toBe('children');
  });
});
