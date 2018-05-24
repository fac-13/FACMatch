import React from 'react';
import StartPause from './StartPause/StartPause';
import Game from './Game/Game';

import shuffleArray from '../utils/shuffleArray';
import getUserData from '../utils/getUserData';

import './app.css';

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
        const member1 = {
          name: res.login,
          profileUrl: res.html_url,
          imgUrl: res.avatar_url
        };
        const member2 = {
          name: res.login,
          profileUrl: res.html_url,
          imgUrl: res.avatar_url
        };
        this.setState({
          fac: shuffleArray([...this.state.fac, member1, member2])
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
    const { running, fac } = this.state;
    return (
      <main>
        <header>
          <h1>FAC Match</h1>
          <p>Instructions</p>
          {running ? <StartPause onClick={this.pause}>Pause</StartPause> : null}
        </header>
        {!running ? (
          <section>
            <StartPause onClick={this.start}>Start</StartPause>
          </section>
        ) : null}
        {fac.length === 32 ? <Game fac={this.state.fac} /> : null}
      </main>
    );
  }
}
