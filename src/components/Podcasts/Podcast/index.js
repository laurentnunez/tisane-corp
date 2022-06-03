// import local
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
// styles

function Podcast({
  title,
  image,
  id,
}) {


  return (
    <Link to={`/podcast/${id}`}>
    <div className="podcast">
      <img className="podcast__image" src={image} alt={title}/> 
    </div>
    </Link>
  );
}

Podcast.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}

export default Podcast;