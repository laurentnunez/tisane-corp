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
      <audio ref={audioPlayer} src="https://archive.org/download/uncoindecine2.0/podcast70-matrix-resurrections.mp3" preload="metadata"></audio>
      <button className="audioplayer__play-pause" onClick={togglePlayPause}>
        { isPlaying ? <FiPause /> : <FiPlay /> }
      </button>
    </div>
);
}

export default AudioPlayer;