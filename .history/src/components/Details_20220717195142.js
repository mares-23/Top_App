import React, { Component } from "react";
import "./Details.scss";


export class Details extends Component {
    constructor(props) {
        super(props);
    
    this.state = { 

     }
    }

   
    render() { 
        return ( 
            
            <div className="modalBackground">
            <div className="modalWrapper">
            <div className="modalContainer">
                <button> x </button>
                <div className="title">redni broj pjesme na listi</div>
                <div className="body">naziv pjesme</div>
                <div className="body">ime glazbenika</div>
                <div className="body">trajanje pjesme u formatu “mm:ss”</div>
            </div>
            </div>
    </div>
            
         );
    }
}
 
export default Details;




