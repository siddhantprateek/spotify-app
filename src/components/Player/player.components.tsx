import React from 'react'
import './player.style.css';
import { PLAY, BACKWARD, FORWARD, REPEAT, SHUFFLE } from '../../assets';
const Player = () => {
  return (
    <div className="player-body">
        <div className="music-banner-body">
            <img 
             src="https://wallpaperaccess.com/full/2082791.jpg" 
             className="music-poster"
             alt="" />
        </div>
        <div className="action-button-body">
            <img className="SHUFFLE" src={SHUFFLE} alt="" />
            <img className="BACKWARD" src={BACKWARD} alt="" />
            <img className="PLAY" src={PLAY} alt="" />
            <img className="FORWARD" src={FORWARD} alt="" />
            <img className="REPEAT" src={REPEAT} alt="" />
        </div>
        <div className="transcript-section">
        </div>
    </div>
  )
}

export default Player