import React, { Component } from "react";


class Details extends Component {
    constructor(props) {
        super(props);
    
    this.state = { 
        
     }
    }
    render() { 
        return ( 
            <div>
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <h2>redni broj pjesme na listi</h2>
                        <h2>naziv pjesme</h2>
                        <h2>ime glazbenika</h2>
                        <h2>trajanje pjesme u formatu “mm:ss”</h2>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        
                    </div>
                    </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Details;




