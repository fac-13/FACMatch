import React from 'react';
import './game';

import doubleArray from '../../utils/doubleArray';

export default class Game extends React.Component {
  state = {};

  componentDidMount() {
    const newState = {};
    this.props.fac.forEach(member => {
      if (newState[member.name + '1']) {
        newState[member.name + '2'] = member;
        newState[member.name + '2'].matched = false;
        newState[member.name + '2'].flipped = false;
      } else {
        newState[member.name + '1'] = member;
        newState[member.name + '1'].matched = false;
        newState[member.name + '1'].flipped = false;
      }
    });
    this.setState(newState);
  }

  handleClick = key => {
    const card = this.state[key];
    if (!card.matched) {
      if (card.flipped) {
        this.setState(prevState => ({
          [key]: Object.assign(prevState[key], { flipped: false })
        }));
      } else {
        const flips = Object.keys(this.state).filter(
          key => this.state[key].flipped && !this.state[key].matched
        ).length;
        if (flips > 1) {
          Object.keys(this.state).forEach(key => {
            if (!this.state[key].matched) {
              this.setState(prevState => ({
                [key]: Object.assign(prevState[key], { flipped: false })
              }));
            }
          });
        }
        this.setState(
          prevState => ({
            [key]: Object.assign(prevState[key], { flipped: true })
          }),
          () => {
            const { name } = card;
            if (
              this.state[name + '1'].flipped &&
              this.state[name + '2'].flipped
            ) {
              this.setState(prevState => ({
                [name + '1']: Object.assign(prevState[name + '1'], {
                  matched: true
                })
              }));
              this.setState(prevState => ({
                [name + '2']: Object.assign(prevState[name + '2'], {
                  matched: true
                })
              }));
            }
          }
        );
      }
    }
  };

  render() {
    const { state } = this;
    return (
      <section className="game">
        {Object.keys(state).map((member, index) => (
          <article
            className="card"
            key={index}
            onClick={() => this.handleClick(Object.keys(state)[index])}
          >
            {state[member].flipped ? (
              <img class="card__avatar" src={state[member].imgUrl} />
            ) : (
              <img
                class="card__back"
                src="https://avatars2.githubusercontent.com/u/9970257?s=200&v=4"
              />
            )}
          </article>
        ))}
      </section>
    );
  }
}
