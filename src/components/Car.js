import React from "react";

import ReactDOM from 'react-dom';


class Car extends React.Component{
    constructor(){
        super();
        this.state = {myLaugh:"Ha HA ha"}
    }

    render(){
        return(
            <div>
                <h2>{this.state.myLaugh}</h2>
            </div>)
    }
 }


 export default Car;
