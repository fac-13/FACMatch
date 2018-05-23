import React from 'react';
import StartPause from './StartPause/StartPause';
import Game from './Game/Game';

import getUserData from '../utils/getUserData';

export default class App extends React.Component {
  state = {
    running: false,
    fac: []
  };

  start = () => {
    const usernames = [
      'i2xzy',
      'jenath',
      'isnotafunction',
      'nik0lz',
      'jennah2121',
      'missKatiaPunter',
      'tdoran',
      'LawEKS',
      'GiuliaTeggi',
      'iPhatty',
      'Parissai',
      'eadehemingway',
      'vlbee',
      'tspeed90',
      'haydnba',
      'helenzhou6'
    ];
    const doubleUsernames = usernames
      .reduce(
        (res, current, index, array) => res.concat([current, current]),
        []
      )
      .sort((a, b) => 0.5 - Math.random());
    const fac = [];
    doubleUsernames.forEach(username => {
      getUserData(`https://api.github.com/users/${username}`).then(res => {
        fac.push({
          name: res.login,
          imgUrl: res.avatar_url,
          url: res.url
        });
      });
    });
    console.log(fac);
    this.setState({ fac });
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
          <StartPause onClick={this.start}>
            {this.state.running ? 'Pause' : 'Start'}
          </StartPause>
          <Game />
        </header>
      </main>
    );
  }
}
