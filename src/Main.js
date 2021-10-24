import { Button, Form, Input } from 'semantic-ui-react';
import App from './App'
import React from 'react';
import axios from 'axios';
import './Main.css';
import logo from './SixCents_beta_logo.png';
import {useEffect} from 'react';

class Main extends React.Component {
  constructor(){
    super();
    this.state = {
      text : "",
      showMainComp : true,
      image: null,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  handleImageChange = (e) => {
    this.setState({
      image: e.target.files[0]
    })
    console.log(e.target.files[0])
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append('file', this.state.image, this.state.image.name);
    let url = 'https://limitless-island-55442.herokuapp.com/https://sixcents-ocr.herokuapp.com/upload';
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
        .then(res => {
          console.log(res.data);
          this.setState({
              ...this.state,
              text: res.data.message,
              showMainComp: false,
          })
        })
        .catch(err => console.log(err))
  };

  handleText = (e) => {
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setCount('Timeout called!');
    //     }, 1000);
    //     return () => clearTimeout(timer);
    // }, []);
    setTimeout(() => this.setState({...this.state, showMainComp : false}), 1000);
    // this.setState({...this.state, showMainComp : false});
    // e.currentTarget.blur();
  }

  render(){
    if(this.state.showMainComp){
      return (
        <div className="MainInput">
            <img src={logo} style={{height: "auto", width: "80%"}}/>
            <Form onSubmit={this.handleText} style={{borderRadius: "20px", borderColor: "black", borderStyle: "solid", padding: "5%"}}>
                <h1>Text Input</h1>
                <p>
                <Input placeholder='Hello World' value={this.state.text} onChange={(e) => this.setState({...this.state, text: e.target.value})}/>
                {/* <Button onClick={() => this.setState({showMainComp : false})}>Submit</Button> */}
                </p>
                <Input type="submit"/>
            </Form>

            <Form onSubmit={this.handleSubmit} style={{borderRadius: "20px", borderColor: "black", borderStyle: "solid", padding: "5%"}}>
                <h1>Image Input</h1>
                <p>
                    <Input type="file"
                        id="image"
                        accept="image/png, image/jpeg"  onChange={this.handleImageChange} required/>
                </p>
                <Input type="submit"/>
            </Form>
        </div>
      );
    }else{
      return (<App text={this.state.text} />);
    }
  }
}

export default Main;