import React from 'react';
import { Player } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='header'>Spotify Transcript App</h1>
      <div className="player-container">
        <Player />
      </div>
    </div>
  );
}

export default App;
