import { Button, Form, Input } from 'semantic-ui-react';
import Real from './Real'
import React from 'react';

class Main extends React.Component {
  constructor(){
    super();
    this.state = {
      text : "Hello",
      showMainComp : true
    };
  }
  render(){
    if(this.state.showMainComp){
      return (
        <Form>
          <Input placeholder='Hello World' value={this.state.text} onChange={(e) => this.setState({text: e.target.value})}/>
          <Button onClick={() => this.setState({showMainComp : false})}>Submit</Button>
        </Form>
      );
    }else{
      return (<App text={this.state.text} />);
    }
  }
}

export default Main;