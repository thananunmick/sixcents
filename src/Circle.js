import React, {useState} from "react";
import './Circle.css'

class Circle extends React.Component {
    render(){
        const vibrate = this.props.vibrate;
        const currentX = this.props.currentX;
        const currentY = this.props.currentY;
        const posx = this.props.posx;
        const posy = this.props.posy;
        const width = this.props.width;
        const height = this.props.height;
        const id = this.props.id;
        const mouseDown = this.props.mouseDown;
       
        if(vibrate){
            if(posx <= currentX  && currentX<= posx+width && posy <= currentY && currentY <= posy+height && mouseDown){
                window.navigator.vibrate(200);
                console.log("VIBRATED!")
            }
            return (
                <div 
                    className="ActiveCircle"
                    id={id}
                    style={{background: "#000000",
                        borderRadius: "50%",
                        width: 150,
                        height: 150,
                        margin: 20,
                        borderStyle: "solid",
                        borderColor: "black",
                        position: "relative"}}></div>
            );
        }else{
            return (
                <div 
                    className="InActiveCircle"
                    id={id}
                    style={{background: "#FFFFFF",
                    borderRadius: "50%",
                    width: 150,
                    height: 150,
                    margin: 20,
                    borderStyle: "solid",
                    borderColor: "black",
                    position: "relative"}}></div>
            );
        }
    }
}

export default Circle;