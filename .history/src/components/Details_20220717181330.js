import React, { Component } from "react";


class Details extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        update
     }
    render() { 
        return ( 
            <div>
            <div className="modalBackground">
            <div className="modalContainer">
                <button onClick={update}> x </button>
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




