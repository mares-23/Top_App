import React, { Component } from "react";
import "./Details.scss";


export class Details extends Component {
    constructor(props) {
        super(props);
    
    this.state = {
        formattedDuration: Math.floor(this.props.data.selectedDetails.duration / 60) + ":" + 
        this.props.data.selectedDetails.duration % 60
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
                    <div className="col-1">
                        <span>{"#" + this.props.data.selectedDetails.position}</span>
                    </div>
                    <div className="col-1">
                        <img src={this.props.data.selectedDetails.album.cover_small}></img>
                    </div>
                    <div className="col-9">
                        <div className="Artist">
                            <h3>{this.props.data.selectedDetails.artist.name}</h3>
                            <h3>{this.props.data.selectedDetails.title}</h3>
                        </div>
                    </div>
                    <div className="col-1">
                        <span>{this.state.formattedDuration}</span>
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




