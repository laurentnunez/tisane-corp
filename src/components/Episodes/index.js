import { useSelector } from 'react-redux';
import Episode from './Episode';

//import ucdcEpisodes from '../../data/ucdcEpisodes';
// styles
import './episodes.scss';

import { FaFacebook, FaInstagram } from "react-icons/fa";

function Episodes() {

  const episodes = useSelector((state) => state.episodes.items);
  console.log(episodes);

  return (
   <div className="episodes">
    <div className="episodes__left-section">
     <img className="episodes__image" alt= "Un Coin de Ciné" src="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/19057193/19057193-1648472550842-a7ea2a84d72c6.jpg"/>
     <h2 className="episodes__title">Un Coin de Ciné</h2>
      <p className="episodes__description">Un Coin de Ciné, c'est quoi ? C'est un podcast sur le cinéma animé par des p'tits gars du sud de la France qui veulent, avant tout, partager et discuter de cinoche en toute simplicité.</p>
      <div className="episodes__social">
        <div className="episodes__logo-facebook"><FaFacebook/></div>
        <div className="episodes__logo-instagram"><FaInstagram/></div>
      </div>
    </div>
    <div className="episodes__right-section">
      <div className="episodes__post">
      {episodes.length < 1 && <p className="no-event">Il n'y a aucun épisode disponible</p>}
      { episodes.length > 0
        && episodes.map((episode) => (
          <Episode
            id={episode.id}
            key={episode.id}
            name={episode.name}
            description={episode.description}
          />
        ))}
        <p>HELLO WORLD !!!!!</p>
      </div>
    </div> 
   </div> 
  );
}

export default Episodes;