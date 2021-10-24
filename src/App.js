import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Circle from './Circle.js'
import './Circle.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    let strIndex = 0;
    let textToRead = "hello";

    this.state = {
      strIndex: strIndex,
      textToRead: textToRead,
      currentChar: textToRead[strIndex],
      currentX: 0,
      currentY: 0,
      mouseDown: true,
      posx: [0, 0, 0, 0, 0, 0],
      posy: [0, 0, 0, 0, 0, 0],
      width: 0,
      height: 0,
      'a': [true, false, false, false, false, false],
      'b': [true, true, false, false, false, false],
      'c': [true, false, false, true, false, false],
      'd': [true, false, false, true, true, false],
      'e': [true, false, false, false, true, false],
      'f': [true, true, false, true, false, false],
      'g': [true, true, false, true, true, false],
      'h': [true, true, false, false, true, false],
      'i': [false, true, false, true, false, false],
      'j': [false, true, false, true, true, false],
      'k': [true, false, true, false, false, false],
      'l': [true, true, true, false, false, false],
      'm': [true, false, true, true, false, false],
      'n': [true, false, true, true, true, false],
      'o': [true, false, true, false, true, false],
      'p': [true, true, true, true, false, false],
      'q': [true, true, true, true, true, false],
      'r': [true, true, true, false, true, false],
      's': [false, true, true, true, false, false],
      't': [false, true, true, true, true, false],
      'u': [true, false, true, false, false, true],
      'v': [true, true, true, false, false, true],
      'w': [false, true, false, true, true, true],
      'x': [true, false, true, true, false, true],
      'y': [true, false, true, true, true, true],
      'z': [true, false, true, false, true, true],
      '1a': [false, false, true, true, true, true],
      '1b': [true, false, false, false, false, false],
      '2a': [false, false, true, true, true, true],
      '2b': [true, true, false, false, false, false],
      '3a': [false, false, true, true, true, true],
      '3b': [true, false, false, true, false, false],
      '4a': [false, false, true, true, true, true],
      '4b': [true, false, false, true, true, false],
      '5a': [false, false, true, true, true, true],
      '5b': [true, false, false, false, true, false],
      '6a': [false, false, true, true, true, true],
      '6b': [true, true, false, true, false, false],
      '7a': [false, false, true, true, true, true],
      '7b': [true, true, false, true, true, false],
      '8a': [false, false, true, true, true, true],
      '8b': [true, true, false, false, true, false],
      '9a': [false, false, true, true, true, true],
      '9b': [false, true, false, true, false, false],
      '0a': [false, false, true, true, true, true],
      '0b': [false, true, false, true, true, false],
      ',': [false, true, false, false, false, false],
      ';': [false, true, true, false, false, false],
      ':': [false, true, false, false, true, false],
      '.': [false, true, false, false, true, true],
      '?': [false, true, true, false, false, true],
      '!': [false, true, true, false, true, false],
    }
  }

  componentDidMount() {
    let elem0 = document.getElementById("btn0");
    let btn0 = elem0.getBoundingClientRect();
    let x0 = btn0.x;
    let y0 = btn0.y;
    let width0 = elem0.offsetWidth;
    let height0 = elem0.offsetHeight;

    let elem1 = document.getElementById("btn1");
    let btn1 = elem1.getBoundingClientRect();
    let x1 = btn1.x;
    let y1 = btn1.y;

    let elem2 = document.getElementById("btn2");
    let btn2 = elem2.getBoundingClientRect();
    let x2 = btn2.x;
    let y2 = btn2.y;

    let elem3 = document.getElementById("btn3");
    let btn3 = elem3.getBoundingClientRect();
    let x3 = btn3.x;
    let y3 = btn3.y;

    let elem4 = document.getElementById("btn4");
    let btn4 = elem4.getBoundingClientRect();
    let x4 = btn4.x;
    let y4 = btn4.y;

    let elem5 = document.getElementById("btn5");
    let btn5 = elem5.getBoundingClientRect();
    let x5 = btn5.x;
    let y5 = btn5.y;

    this.setState({
      ...this.state,
      width: width0,
      height: height0,
      posx: [x0, x1, x2, x3, x4, x5],
      posy: [y0, y1, y2, y3, y4, y5]
    })
  }

  _onMouseMove(e) {
    this.setState({ 
      ...this.state,
      currentX: e.clientX, 
      currentY: e.clientY 
    });
  }

  handleEvent = (event) => {
    if (event.type === "pointerdown") {
      this.setState({
        ...this.state,
        mouseDown: true,
      })
    } else {
      this.setState({
        ...this.state,
        mouseDown: false,
        currentX: 0,
        currentY: 0,
      })
    }
  }

  handleDouble = (event) => {
    let newStrIndex = this.state.strIndex + 1;
    if (event.type === "dblclick") {
      this.setState({
        ...this.state,
        strIndex: newStrIndex,
        currentChar: this.state.textToRead[newStrIndex]
      })

    }
  }

  handleVibrate = (ind) => {
    let currentChar = this.state.currentChar;
    let parseChar = parseInt(currentChar);

    if (isNaN(parseChar)) {
      return this.state[this.state.currentChar][ind]
    } else {

    }
  }

  render() {
    return (
      <div className="App" 
        onPointerDown={this.handleEvent} 
        onPointerUp={this.handleEvent}
        onDoubleClick={this.handleDouble}
        onPointerMove={this._onMouseMove.bind(this)}>
        <div>
          {/* <Circle vibrate={true} currentX={this.state.currentX} currentY={this.state.currentY} posX poxY></Circle> */}
          {/* <button id="button1">Hello1</button>
          <button>Hello4</button> */}
          <Circle id="btn0" mouseDown={this.state.mouseDown} vibrate={this.handleVibrate(0)} currentX={this.state.currentX} currentY={this.state.currentY} posx={this.state.posx[0]} posy={this.state.posy[0]} width={this.state.width} height={this.state.height}/> 
          <Circle id="btn1" mouseDown={this.state.mouseDown} vibrate={this.state[this.state.currentChar][1]} currentX={this.state.currentX} currentY={this.state.currentY} posx={this.state.posx[1]} posy={this.state.posy[1]} width={this.state.width} height={this.state.height}/> 
          <Circle id="btn2" mouseDown={this.state.mouseDown} vibrate={this.state[this.state.currentChar][2]} currentX={this.state.currentX} currentY={this.state.currentY} posx={this.state.posx[2]} posy={this.state.posy[2]} width={this.state.width} height={this.state.height}/> 
        </div>
        <div>
          <Circle id="btn3" mouseDown={this.state.mouseDown} vibrate={this.state[this.state.currentChar][3]} currentX={this.state.currentX} currentY={this.state.currentY} posx={this.state.posx[3]} posy={this.state.posy[3]} width={this.state.width} height={this.state.height}/> 
          <Circle id="btn4" mouseDown={this.state.mouseDown} vibrate={this.state[this.state.currentChar][4]} currentX={this.state.currentX} currentY={this.state.currentY} posx={this.state.posx[4]} posy={this.state.posy[4]} width={this.state.width} height={this.state.height}/> 
          <Circle id="btn5" mouseDown={this.state.mouseDown} vibrate={this.state[this.state.currentChar][5]} currentX={this.state.currentX} currentY={this.state.currentY} posx={this.state.posx[5]} posy={this.state.posy[5]} width={this.state.width} height={this.state.height}/> 
        </div>
        {/* <div>{this.state.strIndex}</div>
        <div>{this.state.currentChar}</div>
        <div>x: {this.state.currentX} y: {this.state.currentY}</div>
        <div>{this.state.mouseDown}</div>
        <div>{this.state['a']}</div> */}
      </div>
    );
  }
}

export default App;
