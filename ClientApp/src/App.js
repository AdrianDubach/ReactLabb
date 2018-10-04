import React, { Component } from 'react';
import Home from './components/Home'

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <div>
        <h1>Sök avgångar</h1>
        <Home/>
      </div>
    );
  }
}
