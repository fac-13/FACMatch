import React from 'react';

import './header.css';

const Header = ({ onClick }) => (
  <header class="header">
    <h1 class="header__title">FAC Match</h1>
    <p class="header__instructions">
      The objective is to collect the most pairs of cards.<br />
      On each turn, a player turns over any two cards (one at a time) and keeps
      them if the cards match<br />
      If they successfully match a pair they get to keep the cards, and that
      player gets another turn.<br />
      When a player turns over two cards that do not match, those cards are
      turned face down again.
    </p>
    <button class="header__btn" onClick={onClick}>
      New Game
    </button>
  </header>
);

export default Header;
