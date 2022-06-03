// import local
import podcasts from '../../data/podcasts';
import Podcast from './Podcast';
// styles
import './podcasts.scss';

function Podcasts() {


  return (
    
    <div className="podcasts">
      <h2 className="podcasts__title">Nos Podcasts</h2>
      <div className="podcasts__data">
      {podcasts.map((podcast) => (   
          <Podcast 
            title={podcast.title}
            image={podcast.image}
            key={podcast.id}
            id={podcast.id}
          />
          ))}
      </div>    
    </div>
  );
}

export default Podcasts;