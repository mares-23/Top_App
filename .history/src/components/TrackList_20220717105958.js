import React, { Component } from 'react'
import axios from 'axios'


export class TrackList extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            tracks: [],
            errorMsg: ''
        }
    }

      componentDidMount() {
        axios.get('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart')
        .then(response => {
            console.log(response)
            this.setState({tracks: response.data.tracks})

            console.log(this.state.tracks)
        })
        .catch(error => {
            console.log(error)
            this.setState({errorMsg: 'error retreiving data'})
        })
    }
    
        
    render() {
        const { tracks, errorMsg } = this.state
        return (
            <div>
    {   
        tracks.length ?
        tracks.data.map(track => 
        <div class="modal modal-tour position-static d-block bg-secondary py-1" tabindex="-1" role="dialog" id="modalTour">
                <div class="modal-dialog" role="document">
                    <div class="modal-content rounded-4 shadow">
                    <div class="modal-body p-3">
                        <h2 class="fw-bold mb-0" >Track number {track.position}</h2>

                        <ul class="d-grid gap-1 my-2 list-unstyled">
                        <li class="d-flex gap-4">
                            <svg class="bi text-muted flex-shrink-0" width="24" height="24"><use href="#grid-fill"></use></svg>
                            <div>
                            <h5 class="mb-0">{track.data.artist.title}</h5>
                        
                            </div>
                        </li>
                        </ul>
                        <button type="button" class="btn btn-lg btn-secondary mt-3 w-75" data-bs-dismiss="modal">Find out more about the track</button>
                    </div>
                    </div>
                </div>
                </div>
        
        ):
        null
    }
    { errorMsg ? <div> {errorMsg} </div> : null}
        </div>
            
        )


    } 
}

export default TrackList