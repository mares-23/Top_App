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
            
            <div class="card" width="5">
  <img class="card-img-top" src="..." alt="Card image cap"></img>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <span className="closeButton" onClick={() => this.selectDetails(null)}> x </span>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
            
         );
    }
}
 
export default Details;




