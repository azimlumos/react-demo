import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const people = [
    {
        name: 'Alan',
        programmingLanguage: 'Swift',
    },
    {
        name: 'Azim',
        programmingLanguage: 'Javascript',
    },
    {
        name: 'Becky',
        programmingLanguage: 'Kotlin',
    },
    {
        name: 'James',
        programmingLanguage: 'Swift',
    },
    {
        name: 'Jesse',
        programmingLanguage: 'Kotlin',
    },
    {
        name: 'Jin',
        programmingLanguage: 'Swift',
    },
    {
        name: 'Joshua',
        programmingLanguage: 'Swift',
    },
];

class App extends Component {

  render() {
      return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
