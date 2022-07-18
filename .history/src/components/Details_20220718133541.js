import React, { Component } from "react";
import "./Details.scss";


export class Details extends Component {
    constructor(props) {
        super(props);
    
    this.state = {
        formattedDuration: Math.floor(this.props.data.selectedDetails.duration / 60).toString().padStart(2, "0") + ":" + 
        (this.props.data.selectedDetails.duration % 60).toString().padStart(2, "0")
     }
    }

    selectDetails(details) {
        this.props.data.selectDetails(details);
    }
   
    render() { 
        return ( 
            
            <div className="card">
  <img className="card-img-top" src={this.props.data.selectedDetails.album.cover_small} alt="Card image cap"></img>
  <div className="card-body">
    <div className="modalHeader">
      <span className="closeButton" onClick={() => this.selectDetails(null)}> x </span>
      </div>
    <p className="card-text">{"#" + this.props.data.selectedDetails.position}</p>
    
    <p className="card-text">{this.props.data.selectedDetails.artist.name}</p>
    <p className="card-text">{this.props.data.selectedDetails.title}</p>
    <p className="card-text">{this.state.formattedDuration}</p>
    
  </div>
</div>
            
         );
    }
}
 
export default Details;




