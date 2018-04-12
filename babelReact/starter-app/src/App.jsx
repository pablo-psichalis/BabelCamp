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
      username: 'Jajejuji',
      surname: 'Jejez',
      age: 23,
    }
  }

  onInputChange = (key, value) => {
    console.log(key, value)
    this.setState({ [key]: value });
  }

  render() {
    const { username, surname, age } = this.state;
    const message = `Hi ${username}! Surname: ${surname}, Age: ${age}`;
    
    return (
      <div className="App">
        <Header logo={logo} />
        <Intro message={message} />
        <WonderForm
          onInputChange={this.onInputChange}
        />
      </div>
    );
  }
}

export default App;
