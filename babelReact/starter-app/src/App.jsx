import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header'
import Intro from './components/Intro';
import WonderForm from './components/WonderForm'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: 'Usercito',
      surname: 'Sanchez',
      age: 23,
    }
  }

  onInputChange = (key, value) => {
    console.log(key, value)
    this.setState({ [key]: value });
  }

  isOld = () => {
    const { age } = this.state
    return age > 28;
  }

  render() {
    const { username, surname, age } = this.state;
    const message = `Hi ${username}! Age: ${age}, Surname: ${surname}`;

    return (
      <div className="App">
        <Header logo={logo} />
        <Intro message={message} />
        {this.isOld() && <p>Eres un viejales!</p>}
        <WonderForm
          onInputChange={this.onInputChange}
        />
      </div>
    );
  }
}

export default App;
