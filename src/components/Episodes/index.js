import Episode from "./Episode";
// styles
import './episodes.scss';
import { FaFacebook, FaInstagram } from "react-icons/fa";

function Episodes() {

    
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
        <Episode
          rssfeed="https://anchor.fm/s/722f8e84/podcast/rss"
          height="1000px"
          width="580px"
        ></Episode>
      </div>
    </div> 
   </div> 
  );
}

export default Episodes;