import React from 'react';
import StartPause from './StartPause/StartPause';
import Game from './Game/Game';

import doubleArray from '../utils/doubleArray';
import shuffleArray from '../utils/shuffleArray';
import getUserData from '../utils/getUserData';

export default class App extends React.Component {
  state = {
    running: false,
    fac: []
  };

  start = () => {
    let usernames = [
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
    this.setState({ running: true, fac: [] });
    usernames.forEach(username => {
      getUserData(`https://api.github.com/users/${username}`).then(res => {
        const member = {
          name: res.login,
          profileUrl: res.html_url,
          imgUrl: res.avatar_url
        };
        this.setState({
          fac: [...this.state.fac, member, member]
        });
        this.setState({
          fac: shuffleArray(this.state.fac)
        });
      });
    });
  };

  pause = () => {
    this.setState({
      running: false
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
        </header>
        {this.state.fac.length !== 32 ? (
          <p>...loading</p>
        ) : (
          <Game fac={this.state.fac} />
        )}
      </main>
    );
  }
}
