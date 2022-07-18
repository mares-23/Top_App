import React, { useState, Component } from 'react'
import "./trackList.scss";
import axios from 'axios'
import Details from './Details'


export class TrackList extends Component {
    constructor() {
        super()
        
        this.state = { 
            tracks: JSON.parse(localStorage.getItem("tracks")),
            errorMsg: '',
            sortDirection: 'ascending',
            openModal: false
        } 

        
       /* this.state = { 
            tracks: [],
            errorMsg: '',
            sortDirection: 'ascending',
            openModal: false
        } */

        

        console.log(this.state.tracks);
    }

      /**  componentDidMount() {
        axios.get('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart')
        .then(response => {
           localStorage.setItem('tracks', JSON.stringify(response.data.tracks))
          /**  this.setState({tracks: response.data.tracks})

            console.log(this.state.tracks)
        })
        .catch(error => {
            console.log(error)
            this.setState({errorMsg: 'error retreiving data',
        tracks: null});
        })
    } */
    

    sortTracks(t1, t2) {
        if (this.state.sortDirection == "ascending") {
            return t1.duration-t2.duration;
        } else {
            return t2.duration-t1.duration;
        }
    }
     
    setDirection(direction) {
        this.setState({sortDirection: direction});
    }

    selectDetails(details) {

        this.props.data.selectDetails(details);
    }

    render() {
    
        return (
            
            <div className='container'>
               
             
                <div className="select-form">
                     <select onChange={e => this.setDirection(e.target.value)} className="form-select" aria-label="Default select example">
                    <option value="ascending" >ascending </option>
                    <option value="descending" >descending</option>
                    </select>
                </div>
             
    {   
        this.state.tracks.data.length &&
        this.state.tracks.data.sort((t1, t2) => this.sortTracks(t1, t2)).map(track => 
        <div className="modal modal-tour position-static d-block bg-secondary py-1" tabIndex="-1" role="dialog" id="modalTour">
                <div className="modal-dialog" role="document">
                    <div className="modal-content rounded-4 shadow">
                    <div className="modal-body p-3">
                        <h2 className="fw-bold mb-0" > {track.title_short}</h2>

                        <ul className="d-grid gap-1 my-2 list-unstyled">
                        <li className="d-flex gap-4">
                            <svg className="bi text-muted flex-shrink-0" width="48" height="24"><use href="#grid-fill"></use></svg>
                            <div>
                           
                        
                            </div>
                        </li>
                        </ul>
                        <button type="button"
                        className="btn btn-lg btn-secondary mt-3 w-75" 
                        onClick={() => this.selectDetails(track)}
                        data-bs-dismiss="modal">More info
                        </button>
                    </div>
                    </div>
                </div>
                </div>
        
        )}
    { this.state.errorMsg ? <div> {this.state.errorMsg} </div> : null}
        </div>
        )


    } 

    


}

export default TrackList