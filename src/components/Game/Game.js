import React from 'react';
import propTypes from 'prop-types';

// import './game.css';

class Game extends React.Component {
  state = {};

  componentDidMount() {
    const newState = {};
    this.props.fac.forEach(member => {
      newState[member.name] = member;
      newState[member.name].matched = false;
      newState[member.name].flipped = false;
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
            const name2 = name.substring(0, name.length - 1) + '2';
            if (this.state[name].flipped && this.state[name2].flipped) {
              this.setState(prevState => ({
                [name]: Object.assign(prevState[name], {
                  matched: true
                })
              }));
              this.setState(prevState => ({
                [name2]: Object.assign(prevState[name2], {
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
              <img className="card__avatar" src={state[member].imgUrl} />
            ) : (
              <img
                className="card__back"
                src="https://avatars2.githubusercontent.com/u/9970257?s=200&v=4"
              />
            )}
          </article>
        ))}
      </section>
    );
  }
}

Game.propTypes = {
  fac: propTypes.arrayOf(propTypes.object)
};

export default Game;
