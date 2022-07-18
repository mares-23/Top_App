import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { TrackList } from './components/TrackList';
import {Details} from './components/Details';


class App extends Component {

  constructor(props) {
    super(props)

    this.state = { 
        selectedDetails: null
    }
}
    
selectDetails(details) {
        this.setState({activeDetails: details});
}

  render() {
    return (
      <div className='App'>
        <TrackList/>
        {this.state.activeDetails && <Details data={
          {details: this.state.selectedDetails,
            selectDetails: this.selectDetails.bind}
        }/>}

      </div>
    )
  }
}

export default App;
