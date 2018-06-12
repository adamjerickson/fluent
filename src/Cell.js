import React, { Component } from 'react';

const bgColors = {
  normal: 'white',
  challenge: 'lightblue',
  correct: 'lightgreen',
  wrong: 'pink',
};

class Cell extends Component {
  backgroundColor = () => {
    return this.props.isActive ? bgColors['challenge'] : bgColors['normal'];
  };
  render() {
    return (
      <div
        className="cell"
        style={{ width: '25%', backgroundColor: this.backgroundColor() }}
        onClick={() => {
          console.log('Clicked', this.props.id);
        }}
      />
    );
  }
}

export default Cell;
