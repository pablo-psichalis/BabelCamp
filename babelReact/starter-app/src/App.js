import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header'
import Intro from './components/Intro';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      username: 'Jajejuji',
    }
  }

  render() {
    const username = this.state.username;
    const message = `Hi ${username}`;
    return (
      <div className="App">
        <Header logo={logo}/>
        <Intro message={message}/>
      </div>
    );
  }
}

export default App;
