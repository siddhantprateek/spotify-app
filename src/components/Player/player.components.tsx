import React from "react";
import "./player.style.css";
import { PLAY, BACKWARD, FORWARD, REPEAT, SHUFFLE } from "../../assets";

const Player = () => {
  const lyrics = [""];
  const data = `
  [00:00.00]by RentAnAdviser.com
  [00:00.00]
  [00:15.40]I'm checking my vital signs
  [00:16.40]Drawing my battle lines
  [00:17.50]Going to war again
  [00:19.10]Feeling the rhythm inside of my chest
  [00:20.60]All I need is just a pen
  [00:22.40]I know I was born for this
  [00:25.90]I know I was born for this
  [00:29.90]Don't care for the critics
  [00:30.90]My words are like physics
  [00:31.80]A force that they can't stop
  [00:33.60]They just don't get it, I think they forget
  [00:35.40]I'm not done till I'm on top
  [00:37.10]I know I was born for this
  [00:40.50]I know I was born for this
  [00:44.70]I believe, I believe
  [00:46.70]We can write our story
  [00:48.50]I believe, I believe
  [00:50.30]We can be an army
  [00:52.30]We are the warriors, who learned to love the pain
  [00:56.00]We come from different places, but have the same name
  [00:59.70]'Cause we were, 'cause we were
  [01:01.70]'Cause we were, 'cause we were
  [01:03.40]Born for this, we were born for this
  [01:07.00]We are the broken ones, who chose to spark a flame
  [01:10.90]Watch as our fire rages, our hearts are never tame
  [01:14.60]'Cause we were, 'cause we were
  [01:16.50]'Cause we were, 'cause we were
  [01:18.30]Born for this, we were born for this
  [01:22.90]
  [01:23.60]I've struggled for years and
  [01:24.70]Through all of the tears
  [01:25.40]I've faced the doubts I hide
  [01:27.30]I never gave into my fears deep within
  [01:28.70]'Cause I heard my voice inside
  [01:30.70]I know I was born for this
  [01:34.10]I know I was born for this
  [01:38.30]I will never lose my voice
  [01:42.00]If I cut out all the noise
  [01:45.30]I know, I was born for this
  [01:48.90]I know, I was born for this
  [01:53.00]I believe, I believe
  [01:55.00]We can write our story
  [01:56.80]I believe, I believe
  [01:58.60]We can be an army
  [02:00.60]We are the warriors, who learned to love the pain
  [02:04.40]We come from different places, but have the same name
  [02:08.00]'Cause we were, 'cause we were
  [02:10.00]'Cause we were, 'cause we were
  [02:11.80]Born for this, we were born for this
  [02:15.30]We are the broken ones, who chose to spark a flame
  [02:19.10]Watch as our fire rages, our hearts are never tame
  [02:22.80]'Cause we were, 'cause we were
  [02:24.70]'Cause we were, 'cause we were
  [02:26.50]Born for this, we were born for this
  [02:30.60]
  [02:45.00]These words that I write are for someone like me
  [02:46.40]To know you're not alone
  [02:48.20]The moves that you make ya they come with mistakes
  [02:50.10]Don't ever lose your hope
  [02:51.70]Just know, you were born for this
  [02:55.30]Just know, you were born for this
  [03:00.70]
  [03:01.50]We are the warriors, who learned to love the pain
  [03:05.30]We come from different places, but have the same name
  [03:09.00]'Cause we were, 'cause we were
  [03:10.90]'Cause we were, 'cause we were
  [03:12.60]Born for this, we were born for this
  [03:16.50]We are the broken ones, who chose to spark a flame
  [03:20.00]Watch as our fire rages, our hearts are never tame
  [03:23.80]'Cause we were, 'cause we were
  [03:25.60]'Cause we were, 'cause we were
  [03:27.40]Born for this, we were born for this
  [03:31.70]
  [03:41.60]We were born for this
  [03:43.50]We were born for this
  [03:45.70]
  [03:46.70]by RentAnAdviser.com
  [03:55.70]
  `
  data.toString().split("\n").forEach(function(line, index, arr) {
    if (index === arr.length - 1 && line === "") { return; }
    lyrics.push(line.slice(12, line.length))
  });
  console.log(lyrics)

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
            {lyrics.map(line => (
              <>
                <p>{line}</p>
              </>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Player;