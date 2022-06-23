import { useState, useRef } from "react";
import { FiPlay, FiPause } from "react-icons/fi";
import './audioplayer.scss';

function AudioPlayer() {

  const [isPlaying, setIsPlaying] = useState(false);
  const audioPlayer = useRef();
  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  }

  return(
    <div className="audioplayer">
      <audio ref={audioPlayer} src="https://anchor.fm/s/722f8e84/podcast/play/49723841/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2022-2-28%2Fa2b8dde1-281e-8923-9a7a-ce6ce7807683.mp3" preload="metadata"></audio>
      <button className="audioplayer__play-pause" onClick={togglePlayPause}>
        { isPlaying ? <FiPause /> : <FiPlay /> }
      </button>
    </div>
);
}

export default AudioPlayer;