import React, {useState} from "react";

class Circle extends React.Component {
    render(){
        const [vibrate, currentX, currentY, posx, posy, width, height] = this.props;
       
        if(vibrate){
            if(posx <= currentX  && currentX<= posx+width && posy <= currentY && currentY <= posy+height){
                window.navigator.vibrate(200);
            }
            return (
                <div class="ActiveCircle" ></div>
            );
        }else{
            return (
                <div class="InActiveCircle"></div>
            );
        }
    }
}

export default Circle;