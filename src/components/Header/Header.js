import React from 'react';
import propTypes from 'prop-types';

import './header.css';

const Header = ({ onClick }) => (
  <header className="header">
    <h1 className="header__title">FAC Match</h1>
    <p className="header__instructions">
      The objective is to collect the most pairs of cards.<br />
      On each turn, a player turns over any two cards (one at a time) and keeps
      them if the cards match<br />
      If they successfully match a pair they get to keep the cards, and that
      player gets another turn.<br />
      When a player turns over two cards that do not match, those cards are
      turned face down again.
    </p>
    <button className="header__btn" onClick={onClick}>
      New Game
    </button>
  </header>
);

Header.propTypes = {
  onClick: propTypes.func
};

export default Header;
