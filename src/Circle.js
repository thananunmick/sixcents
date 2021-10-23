import React, {useState} from "react";

class Circle extends React.Component {
    handleCursorHover = () => {
        console.log("ok bro\n");
        window.navigator.vibrate(200);
    };

    render(){
        const status = this.props.vibrate;
       
        if(status){
            return (
                <div class="ActiveCircle" onMouseOver={this.handleCursorHover}></div>
            );
        }else{
            return (
                <div class="InActiveCircle"></div>
            );
        }
    }
}

export default Circle;