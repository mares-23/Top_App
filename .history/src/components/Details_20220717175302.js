import React, { Component } from "react";


export class Details extends Component(updateParent) {

    constructor(props) {
        super(props);
    }

    render() {
    return (
    <div className="modalBackground">
    <div className="modalContainer">
        <button onClick={this.props.updateParent}> x </button>
        <div className="title">redni broj pjesme na listi</div>
        <div className="body">naziv pjesme</div>
        <div className="body">ime glazbenika</div>
        <div className="body">trajanje pjesme u formatu “mm:ss”</div>
    </div>
    
    </div>
    )
}
    
}


export default Details;

