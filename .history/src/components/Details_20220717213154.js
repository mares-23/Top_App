import React, { Component } from "react";
import "./Details.scss";


export class Details extends Component {
    constructor(props) {
        super(props);
    
    this.state = { 
        selectedDetails: props.selectedDetails
     }
    }

    selectDetails(details) {
        this.props.data.selectDetails(details);
    }
   
    render() { 
        return ( 
            
            <div className="modalBackground">
            <div className="modalWrapper">
            <div className="modalContainer">
                <div className="modalHeader">
                <span className="closeButton" onClick={() => this.selectDetails(null)}> x </span>
                </div>
                <div className="modalBody">
                <div className="container">
                <div className="row">
                    <div className="col-2">
                        <span>{"#" + this.state.selectedDetails.position}</span>
                    </div>
                    <div className="col-10">

                    </div>
                </div>
                </div>


              
                </div>
            </div>
            </div>
    </div>
            
         );
    }
}
 
export default Details;




