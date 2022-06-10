import { PropTypes } from 'prop-types';
//import { Link } from 'react-router-dom';
// styles
import { FiPlay } from "react-icons/fi";
import '../episodes.scss';


function Episode({
  id,
  name,
  description,

}) {

  return (
    
      <div className="episode">
            <div className="episode__data">
              <div className="episode__logo-play"><FiPlay /></div>
              <div className="episode__post-title">{name}</div> 
              <div className="episode__post-title">{id}</div> 
              <p className="episode__post-description">{description}</p>
            </div>  
      </div> 
    
  );
}

Episode.propTypes = {
  
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
   
};

export default Episode;