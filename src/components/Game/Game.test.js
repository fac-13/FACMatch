import React from 'react';
import Game from './Game';
import { render, Simulate } from 'react-testing-library';

const fac = [
  {
    name: 'i2xzy1',
    profileUrl: 'https://github.com/i2xzy',
    imgUrl: 'https://avatars0.githubusercontent.com/u/11375079?v=4'
  },
  {
    name: 'i2xzy2',
    profileUrl: 'https://github.com/i2xzy',
    imgUrl: 'https://avatars0.githubusercontent.com/u/11375079?v=4'
  },
  {
    name: 'jenath1',
    profileUrl: 'https://github.com/i2xzy',
    imgUrl: 'https://avatars0.githubusercontent.com/u/11375079?v=4'
  },
  {
    name: 'jenath2',
    profileUrl: 'https://github.com/i2xzy',
    imgUrl: 'https://avatars0.githubusercontent.com/u/11375079?v=4'
  }
];

describe('Test Game', () => {
  test('displays unflipped card', () => {
    const { container } = render(<Game fac={fac} />);
    const actual = container.querySelector('img').src;
    expect(actual).toBe(
      'https://avatars2.githubusercontent.com/u/9970257?s=200&v=4'
    );
  });

  test('displays flipped card', () => {
    const { container } = render(<Game fac={fac} />);
    const card = container.querySelector('.card');
    Simulate.click(card);
    const actual = container.querySelector('img').src;
    expect(actual).toBe(
      'https://avatars0.githubusercontent.com/u/11375079?v=4'
    );
  });

  test('flip twice card', () => {
    const { container } = render(<Game fac={fac} />);
    const card = container.querySelector('.card');
    Simulate.click(card);
    Simulate.click(card);
    const actual = container.querySelector('img').src;
    expect(actual).toBe(
      'https://avatars2.githubusercontent.com/u/9970257?s=200&v=4'
    );
  });

  test('match card', () => {
    const { container } = render(<Game fac={fac} />);
    const card1 = container.querySelector('.card');
    const card2 = container.querySelectorAll('.card')[1];
    Simulate.click(card1);
    Simulate.click(card2);
    const actual = container.querySelector('img').src;
    expect(actual).toBe(
      'https://avatars0.githubusercontent.com/u/11375079?v=4'
    );
  });

  test('flip 2 different cards', () => {
    const { container } = render(<Game fac={fac} />);
    const card1 = container.querySelector('.card');
    const card2 = container.querySelectorAll('.card')[1];
    const card3 = container.querySelectorAll('.card')[2];
    Simulate.click(card1);
    Simulate.click(card3);
    Simulate.click(card2);
    const actual = container.querySelector('img').src;
    expect(actual).toBe(
      'https://avatars2.githubusercontent.com/u/9970257?s=200&v=4'
    );
  });
});
