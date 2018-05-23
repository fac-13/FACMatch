import React from 'react';
import StartPause from './StartPause/StartPause';
import Game from './Game/Game';

export default class App extends React.Component {
  state = {
    running: false
  };

  startPause = () => {
    this.setState({
      running: !this.state.running
    });
  };

  render() {
    return (
      <main>
        <header>
          <h1>FAC Match</h1>
          <p>Instruction</p>
          <StartPause onClick={this.startPause}>
            {this.state.running ? 'Pause' : 'Start'}
          </StartPause>
          <Game />
        </header>
      </main>
    );
  }
}
