import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Game from './pages/Game';
import Settings from './pages/Settings';
// import logo from './trivia.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/games" component={ Game } />
        <Route path="/configuracoes" component={ Settings } />
      </Switch>
    );
  }
}

export default App;
