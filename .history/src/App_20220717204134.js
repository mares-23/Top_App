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
}

  render() {
    return (
      <div className='App'>
        <TrackList selectDetails={handleSelectDetails}/>
        {this.state.activeDetails && <Details/>}

      </div>
    )
  }

  handleSelectDetails(evt) {
    console.log(evt);

  }
}

export default App;
