import React from 'react';
import Header from './Header/Header';
import Game from './Game/Game';

import shuffleArray from '../utils/shuffleArray';
import getUserData from '../utils/getUserData';

// import './app.css';

export default class App extends React.Component {
  state = {
    fac: [],
    err: ''
  };

  start = () => {
    let usernames = [
      'i2xzy',
      'jenath',
      'isnotafunction',
      'nic-oz',
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
      getUserData(`https://api.github.com/users/${username}`)
        .then(res => {
          const member1 = {
            name: `${res.login}1`,
            profileUrl: res.html_url,
            imgUrl: res.avatar_url
          };
          const member2 = {
            name: `${res.login}2`,
            profileUrl: res.html_url,
            imgUrl: res.avatar_url
          };
          this.setState({
            fac: shuffleArray([...this.state.fac, member1, member2])
          });
        })
        .catch(err => {
          this.setState({
            err: err.message
          });
        });
    });
  };

  render() {
    const { fac, err } = this.state;
    return (
      <main>
        <Header onClick={this.start} />
        {fac.length === 32 ? <Game fac={fac} /> : null}
        {err.length >= 1 ? <span>{err}</span> : null}
      </main>
    );
  }
}
