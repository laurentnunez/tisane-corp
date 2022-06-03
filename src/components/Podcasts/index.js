// import local
import podcasts from '../../data/podcasts';
import Podcast from './Podcast';
// styles
import './podcasts.scss';

function Podcasts() {


  return (
    
    <div className="podcasts">
      {podcasts.map((podcast) => (   
          <Podcast 
            title={podcast.title}
            image={podcast.image}
            key={podcast.id}
            id={podcast.id}
          />
          ))}
    </div>
  );
}

export default Podcasts;