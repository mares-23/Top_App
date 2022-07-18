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
    <div className="modalBackground">  
        <div className="modalWrapper">
            <div className="modalContainer">
            <div className="container">
            <div className="card-body">
            <div className="card">
                    <img className="card-img-top" src={this.props.data.selectedDetails.album.cover_medium} alt="Card image cap"></img>
  <div className="modalBody">
        
    <div className="modalHeader">
      <span className="closeButton" onClick={() => this.selectDetails(null)}> x </span>
      </div>
      
      <div className="row"><p className="card-text">{"#" + this.props.data.selectedDetails.position}</p></div>
    
      <div className="row"><p className="card-text">{this.props.data.selectedDetails.artist.name}</p></div>
      <div className="row"><p className="card-text">{this.props.data.selectedDetails.title}</p></div>
      <div className="row"> <p className="card-text">{this.state.formattedDuration}</p></div>
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




