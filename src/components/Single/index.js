import PropTypes from 'prop-types';
import { useState, useRef } from "react";
import { FiPlay, FiPause } from "react-icons/fi";
import './single.scss';

function Single({
  description,
  name,
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
    <div className="single">
      <div className="episode__logo-play">
      <div className="episode__post-title">{name}</div>
          <audio ref={audioPlayer} src={audio} ></audio>
            <button className="audioplayer__play-pause" onClick={togglePlayPause}>
              { isPlaying ? <FiPause /> : <FiPlay /> }
            </button>
      </div>
      <p className="episode__post-description">{description}</p>
    </div>
  )
}

Single.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  audio: PropTypes.string.isRequired,
};


export default Single;