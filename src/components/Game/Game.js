import React from 'react';
import './game';

export default class Game extends React.Component {
  state = {
    card1: '',
    card2: ''
  };

  handleClick = card => {
    if (this.state.card1 === '') {
      this.setState({ card1: card });
    } else if (this.state.card2 === '') {
      this.setState({ card2: card });
    }
    console.log(this.state);
  };

  render() {
    const { fac } = this.props;
    return (
      <section className="game">
        {fac.map((member, index) => (
          <article key={index} onClick={() => this.handleClick(member.name)}>
            {member.name}
          </article>
        ))}
      </section>
    );
  }
}
