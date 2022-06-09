import { PropTypes } from 'prop-types';
//import { Link } from 'react-router-dom';
import { useState, useRef } from "react";
//import AudioPlayer from './AudioPlayer';

// styles
import { FiPlay, FiPause } from "react-icons/fi";
import '../episodes.scss';
//import AudioPlayer from './AudioPlayer';

function Episode({
  id,
  name,
  description,
  audio,

}) {


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

  return (
    
      <div className="episode">
        <div className="episode__data" value={id}> 
          <div className="episode__logo-play">
          <audio ref={audioPlayer} src={audio} ></audio>
            <button className="audioplayer__play-pause" onClick={togglePlayPause}>
              { isPlaying ? <FiPause /> : <FiPlay /> }
            </button>
          </div>
          <div className="episode__post-title">{name}</div>
          <p className="episode__post-description">{description}</p>
        </div>
      </div>
    
  )
}

Episode.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  audio: PropTypes.string.isRequired,
};

export default Episode;