import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { TrackList } from './components/TrackList';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <TrackList/>
        <Details/>

      </div>
    )
  }
}

export default App;
