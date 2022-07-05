import { useEffect, useState } from 'react';
//import * as rssParser from 'react-native-rss-parser';
//import Episode from "./Episode";
// styles
import './episodes.scss';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FiPlay } from "react-icons/fi";
//import { rss } from 'react-native-rss-parser/model/rss';

//console.log(rss.items);

function Episodes() {
  
  //const [feed, setFeed] = useState([]);
  //useEffect(() => {
    //  function fetchData() {
      //  const response = fetch(
        //  "https://anchor.fm/s/722f8e84/podcast/rss"
        //)
          //.then((response) => response.text())
          //.then((responseData) => rssParser.parse(responseData))
          //.then((rss) => {
            //setFeed(rss.items);
              
          //});

      //}
      //fetchData();
    //}, [feed]);


    useEffect(() => {
      fetch("https://anchor.fm/s/722f8e84/podcast/rss")
          .then(res => res.text())
          .then(data => {
              let parser = new DOMParser()
              let xmlDoc = parser.parseFromString(data, 'text/xml')
              console.log(xmlDoc)
          })
          .catch(err => console.log(err));
  }, [])






  
  return (
   <div className="episodes">
     
    <div className="episodes__left-section">
     
     <img className="episodes__image" alt= "Un Coin de Ciné" src="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/19057193/19057193-1648472550842-a7ea2a84d72c6.jpg"/>
     
     
      <h2 className="episodes__title" >titre</h2>
      <p className="episodes__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      <div className="episodes__social">
        <div className="episodes__logo-facebook"><FaFacebook/></div>
        <div className="episodes__logo-instagram"><FaInstagram/></div>
        
    </div>
    
    </div>

    <div className="episodes__right-section">
      <div className="episodes__post">
      
        <div className="episode">
          <div className="episode__data">
            <div className="episode__data-header">
            <div className="audioplayer"><FiPlay /></div>
              <div className="episode__post-date">date de publication</div>
            </div>
            <div className="episode__post-title" ></div>
            <div className="episode__post-description">
            <p></p>
            <img className="episode__image" alt= "72" src="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_episode400/19057193/19057193-1648451904545-7cd757063965.jpg"/>
            </div>
          </div>     
          
        </div>

                
      </div>
      </div>
      </div>
  
  );

}
export default Episodes;