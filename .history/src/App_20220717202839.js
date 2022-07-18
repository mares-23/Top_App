import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { TrackList } from './components/TrackList';
import {Details} from './components/Details';


class App extends Component {

  constructor(props) {
    super(props)

    this.state = { 
        activeDetails: null
    }

    

    console.log(this.state.tracks);
}

  render() {
    return (
      <div className='App'>
        <TrackList parentCallback = {this.detailsSelected}/>
        {this.state.activeDetails && <Details/>}

      </div>
    )
  }

  detailsSelected = (details) =>{
    this.setState({activeDetails: details});
    console.log(this.state.activeDetails);
}

}

export default App;
