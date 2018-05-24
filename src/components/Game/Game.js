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
        this.setState(
          prevState => ({
            [key]: Object.assign(prevState[key], { flipped: true })
          }),
          () => {
            name = key.substring(0, key.length - 1);
            if (
              this.state[name + '1'].flipped &&
              this.state[name + '2'].flipped
            ) {
              console.log('cards match');
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
            } else {
              const flips = Object.keys(this.state).filter(
                key =>
                  this.state[key].flipped && !this.state[key].matched
                    ? true
                    : false
              );
              console.log(flips.length);
              if (flips.length > 1) {
                setTimeout(() => {
                  Object.keys(this.state).forEach(key => {
                    if (!this.state[key].matched) {
                      this.setState(prevState => ({
                        [key]: Object.assign(prevState[key], { flipped: false })
                      }));
                    }
                  });
                }, 500);
              }
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
        {state === {} ? (
          <p>...loading</p>
        ) : (
          Object.keys(state).map((member, index) => (
            <article
              key={index}
              onClick={() => this.handleClick(Object.keys(state)[index])}
            >
              {state[member].flipped ? (
                <img src={state[member].imgUrl} />
              ) : (
                <h2>FAC</h2>
              )}
            </article>
          ))
        )}
      </section>
    );
  }
}
