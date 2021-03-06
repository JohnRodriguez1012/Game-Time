import React, { Component } from 'react';
import GameContainer from './Components/GameContainer';
import { connect } from 'react-redux'
import newGame from './actions/newGame'
import './HangmanApp.css';

class HangmanApp extends Component {
  componentDidMount() {
    this.props.newGame()
  }
  render() {
    return (
      <div className="App">
        <GameContainer />
      </div>
    );
  }
}

export default connect(null, { newGame })(HangmanApp)