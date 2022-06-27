import { useEffect, useState } from 'react';
import * as rssParser from 'react-native-rss-parser';
//import Episode from "./Episode";
// styles
import './episodes.scss';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FiPlay } from "react-icons/fi";
import { rss } from 'react-native-rss-parser/model/rss';

// console.log(rss.items);

function Episodes() {
  
  const [feed, setFeed] = useState([]);
  useEffect(() => {
      async function fetchData() {
        const response = await fetch(
          "https://anchor.fm/s/722f8e84/podcast/rss"
        )
          .then((response) => response.text())
          .then((responseData) => rssParser.parse(responseData))
          .then((rss) => {
            setFeed(rss.items);
          });
      }
      fetchData();
    }, [feed]);

  
  return (
   <div className="episodes">
    <div className="episodes__left-section">
      
     <img className="episodes__image" alt= "Un Coin de Ciné" src="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/19057193/19057193-1648472550842-a7ea2a84d72c6.jpg"/>
    
      <h2 className="episodes__title">{rss.title}</h2>
      <p className="episodes__description">{rss.description}</p>
      <div className="episodes__social">
        <div className="episodes__logo-facebook"><FaFacebook/></div>
        <div className="episodes__logo-instagram"><FaInstagram/></div>
      </div>
    </div>
    <div className="episodes__right-section">
      <div className="episodes__post">
      <div className="episode">
          <div className="audioplayer"><FiPlay /></div>
          <div className="episode__data">
          {feed.map((items) => (
            <div className="episode__post-title" key={items.id} >{items.title}</div>))} 
            <p className="episode__post-description">description</p>
            </div> 
            <p className="episode__post-description">Il y a quelques posts, nous mettions en avant la sortie évènement de "<em><strong>The Batman</strong></em>" de Matt Reeves et, vous vous en doutez bien, l'équipe d'Un Coin de Ciné s'est précipitée dans une salle de cinéma et ensuite sur les micros pour en parler.</p>
          
          <img className="episode__image" alt= "72" src="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_episode400/19057193/19057193-1648451904545-7cd757063965.jpg"/>
        </div>
      
        <div className="episode">
          <div className="audioplayer"><FiPlay /></div>
          <div className="episode__data">
            <div className="episode__post-title">#71 - Don't Look Up</div>
            <p className="episode__post-description">Lors d'une précédente publication, nous avions mis en avant "<em><strong>Don't Look Up: Déni Cosmique</strong></em>" tel une étoile filante illuminant le paysage cinématographique. Nous ne pouvions donc pas passer à côté d'une occasion aussi belle pour réunir nos figures...</p>
          </div>
          <img className="episode__image" alt= "71" src="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_episode400/19057193/19057193-1644410787286-5f9753efdda9.jpg"/>
        </div>
        <div className="episode">
          <div className="audioplayer"><FiPlay /></div>
          <div className="episode__data">
            <div className="episode__post-title">#70 - Matrix-Ressurections</div>
            <p className="episode__post-description">Amis d&apos;Un Coin de Ciné, voici le dernier podcast tout chaud et juste sorti du four dans lequel nous allons parler de Matrix Resurrections. Sommes-nous dans un monde réel ou simplement aveuglé et asservi par la Matrice ? Belle question métaphysique...</p>
          </div>
          <img className="episode__image" alt= "70" src="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_episode400/19057193/19057193-1642061918047-ad9c7bb4e1464.jpg"/>
        </div>
        <div className="episode">
          <div className="audioplayer"><FiPlay /></div>
          <div className="episode__data">
            <div className="episode__post-title">#69 - Holiday Special</div>
            <p className="episode__post-description">Cher(e)s auditeurs/auditrices, bienvenue dans notre épisode spécial consacré aux films de "Noël". Vaste sujet ! Nous sommes donc revenus sur certains de films adorés liés (plus ou moins) à cette période. On vous a concocté ce numéro riches en œuvres...</p>
          </div>
          <img className="episode__image" alt= "69" src="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_episode400/19057193/19057193-1639734174971-2bdaf15fd706.jpg"/>
        </div>
      </div>
    </div> 
   </div>
  
  );

}
export default Episodes;