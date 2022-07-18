import React, { useState, Component } from 'react'
import axios from 'axios'
import Details from './Details'


export class TrackList extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            tracks: JSON.parse(localStorage.getItem("tracks")),
            errorMsg: '',
            sortDirection: 'ascending',
            openModal: false
        }

        

        console.log(this.state.tracks);
    }

       /**componentDidMount() {
        axios.get('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart')
        .then(response => {
            console.log(response)
            localStorage.setItem('tracks', JSON.stringify(response.data.tracks));
            this.setState({tracks: response.data.tracks})

            console.log(this.state.tracks)
        })
        .catch(error => {
            console.log(error)
            this.setState({errorMsg: 'error retreiving data'})
        })
    } **/
    

    sortTracks(t1, t2) {
        if (this.sortDirection == "ascending") {
            return t1.duration-t2.duration;
        } else {
            return t2.duration-t1.duration;
        }
    }
     
    setDirection(direction) {
        this.sortDirection = direction;
        console.log(this.sortDirection);
    }

    render() {
    
        return (
            
            <div>
               
             
                <select onChange={e => this.setDirection(e.target.value)} class="form-select" aria-label="Default select example">
                    <option value="ascending" >ascending </option>
                    <option value="descending" >descending</option>
                    
                    
                </select>
             
    {   
        this.state.tracks.data.length ?
        this.state.tracks.data.sort((t1, t2) => this.sortTracks(t1, t2)).map(track => 
        <div class="modal modal-tour position-static d-block bg-secondary py-1" tabindex="-1" role="dialog" id="modalTour">
                <div class="modal-dialog" role="document">
                    <div class="modal-content rounded-4 shadow">
                    <div class="modal-body p-3">
                        <h2 class="fw-bold mb-0" >Track number {track.position}</h2>

                        <ul class="d-grid gap-1 my-2 list-unstyled">
                        <li class="d-flex gap-4">
                            <svg class="bi text-muted flex-shrink-0" width="24" height="24"><use href="#grid-fill"></use></svg>
                            <div>
                            <h5 class="mb-0">{track.title}</h5>
                        
                            </div>
                        </li>
                        </ul>
                        <button type="button" 
                        className='openModalBtn'
                        onClick={() => {
                            this.state.openModal = true
                        }} 
                        class="btn btn-lg btn-secondary mt-3 w-75" 
                        data-bs-dismiss="modal">More info
                        </button>
                        { openModal && <Details/>}
                    </div>
                    </div>
                </div>
                </div>
        
        ):
        null
    }
    { this.state.errorMsg ? <div> {this.state.errorMsg} </div> : null}
        

        
        </div>

            
        )


    } 

    


}

export default TrackList