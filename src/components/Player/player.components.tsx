import React from "react";
import "./player.style.css";
import { PLAY, BACKWARD, FORWARD, REPEAT, SHUFFLE } from "../../assets";
const Player = () => {
  return (
    <div className="player-body">
      <div className="bg-overlay" />
      <div className="player-contents">
        <div className="music-banner-body">
          <img
            src="https://wallpaperaccess.com/full/2082791.jpg"
            className="music-poster"
            alt=""
          />
          <div className="music-desp">
            <div className="song-desp">
              <h1>Unknown Sound</h1>
              <p>Unknown artist</p>
            </div>
            <img src="" alt="heart" />
          </div>
        </div>
        <hr />
        <div className="action-button-body">
          <img className="SHUFFLE" src={SHUFFLE} alt="" />
          <img className="BACKWARD" src={BACKWARD} alt="" />
          <img className="PLAY" src={PLAY} alt="" />
          <img className="FORWARD" src={FORWARD} alt="" />
          <img className="REPEAT" src={REPEAT} alt="" />
        </div>
        <div className="upload-file-section">
          <input className="choose-file" type="file" />
        </div>
        <div className="transcript-section">
          <p className="transcript-body">
            My brain is a one way train and i'm 'bout to ride it out Octane
            running through these veins, burning all my fears down Today, yeah,
            the cycle breaks, it's time to change the rules now Here I go, here
            I go Adrenaline, yeah, it's like a drug The more you taste, can't
            get enough The more you taste, can't get enough, get enough Can you
            feel the rush Taking over all your senses? Can you feel the rush
            Breaking down all your defenses? Can you feel the rush Racing with
            no consequences? Can you feel the rush, rush, rush? Can you feel it?
            Insane 'cause I love the way when my pulse races double time The
            fast lane never could contain, got my heart beating overdrive Today,
            yeah, the cycle breaks, it's time to change the rules now Here I go,
            here I go Adrenaline, yeah, it's like a drug The more you taste,
            can't get enough The more you taste can't, the more you taste can't
            Can you feel the rush Taking over all your senses? (ooh) Can you
            feel the rush Breaking down all your defenses? (ooh) Can you feel
            the rush Racing with no consequences? (ooh) Can you feel the rush,
            rush, rush? Can you feel it? Aye, aye Can you feel it? Aye, aye Can
            you feel it? Adrenaline, yeah, it's like a drug (aye, aye) The more
            you taste, can't get enough The more you taste, can't get enough,
            get enough Can you feel the rush Taking over all your senses? (ooh)
            Can you feel the rush Breaking down all your defenses? (ooh) Can you
            feel the rush Racing with no consequences? (ooh) Can you feel the
            rush, rush, rush? Can you feel it? Aye, aye Can you feel it? Rush,
            rush, rush Can you feel it?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Player;
