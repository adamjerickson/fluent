import sampleSize from 'lodash.samplesize';
import React, { Component } from 'react';
import './App.css';

import Cell from './Cell.js';

class App extends Component {
  state = {
    gameStatus: 'play', // 'play'
  };
  // read: this.state.answer
  // this.setState({ answer: 37 });
  cellIds = Array.from({ length: 16 }, (_, i) => i);
  challengeCellIds = sampleSize(this.cellIds, 6);
  componentDidMount() {
    setTimeout(() => {
      console.log('After timer');
    }, 3000);
  }
  isCellActive = id => {
    const isCellChallenge = this.challengeCellIds.indexOf(id) >= 0;
    return isCellChallenge && this.state.gameStatus === 'challenge';
  };
  render() {
    return (
      <div className="game">
        <div className="help">
          You will have 3 seconds to memorize X blue random cells
        </div>
        <div className="grid challenge">
          {this.cellIds.map(id => {
            return <Cell key={id} id={id} isActive={this.isCellActive(id)} />;
          })}
        </div>
        <button>Start</button>
        <div className="message">Game Message Here...</div>
      </div>
    );
  }
}

export default App;
