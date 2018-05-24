import React from 'react';
import './game';

export default class Game extends React.Component {
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

  handleClick = name => {
    console.log(name);
    if (!this.state[name].flipped) {
      this.setState(prevState => (prevState[name].flipped = true));
    } else if (this.state.card2 === '') {
      this.setState({ card2: card });
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
              onClick={() => this.handleClick(state[member].name)}
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
