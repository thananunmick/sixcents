import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);

    let strIndex = 0;
    let textToRead = "Hello";

    this.state = {
      strIndex: strIndex,
      textToRead: textToRead,
      currentChar: textToRead[strIndex],
      currentX: 0,
      currentY: 0,
      mouseDown: "TRUE", 
    }
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
      // this.setState({ message: "Mouse Down"});
      // this.setState({message: "Mouse Down"});
      // console.log("DOWN!")
      this.setState({
        ...this.state,
        mouseDown: "TRUE",
        // currentX: event.screenX, 
        // currentY: event.screenY
      })
      let elem = document.getElementById("button1");
      let btn1 = elem.getBoundingClientRect();
      console.log(elem.offsetHeight)
      console.log(elem.offsetWidth)
      console.log(btn1.x + " " + btn1.y)
    } else {
        // this.setState({ message: "Mouse Up"});
      // this.setState({message: "Mouse Up"})
      // console.log("UP!")
      this.setState({
        ...this.state,
        mouseDown: "FALSE",
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

  // onClickHandler = event => {
  //   clearTimeout(timer);
  //   if (event.detail === 1) {
  //       timer = setTimeout(this.props.onClick, 200)
  //       console.log("1")
  //   } else if (event.detail === 2) {
  //       this.props.onDoubleClick()
  //       console.log("2")
  //   }
  // }

  render() {
    return (
      <div className="App" 
        onPointerDown={this.handleEvent} 
        onPointerUp={this.handleEvent}
        onDoubleClick={this.handleDouble}
        onPointerMove={this._onMouseMove.bind(this)}>
        <div>
          {/* <Circle vibrate={true} currentX={this.state.currentX} currentY={this.state.currentY} posX poxY></Circle> */}
          <button id="button1">Hello1</button>
          <button>Hello4</button>
        </div>
        <div>
          <button>Hello2</button>
          <button>Hello5</button>
        </div>
        <div>
          <button>Hello3</button>
          <button>Hello6</button>
        </div>
        <div>{this.state.strIndex}</div>
        <div>{this.state.currentChar}</div>
        <div>x: {this.state.currentX} y: {this.state.currentY}</div>
        <div>{this.state.mouseDown}</div>
      </div>
    );
  }
}

export default App;
