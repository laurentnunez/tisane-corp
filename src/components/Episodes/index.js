import { useEffect, useState } from 'react';
import * as rssParser from 'react-native-rss-parser';
//import Episode from "./Episode";
// styles
import './episodes.scss';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FiPlay } from "react-icons/fi";
import { rss } from 'react-native-rss-parser/model/rss';
//import { rss } from 'react-native-rss-parser/model/rss';

function Episodes() {
  
  const [feed, setFeed] = useState([]);
  useEffect(() => {
     function fetchData() {
        const response = fetch(
          "https://anchor.fm/s/722f8e84/podcast/rss"
        )
          .then((response) => response.text())
          .then((responseData) => rssParser.parse(responseData))
          .then((rss) => {
            setFeed(rss.items);
            //console.log(rss);
               
          }); 
      }
      fetchData();
    }, [feed]);
    //console.log(feed);

    const [details, setDetails] = useState([]);
    useEffect(() => {
       function fetchData() {
          const response = fetch(
            "https://anchor.fm/s/722f8e84/podcast/rss"
          )
            .then((response) => response.text())
            .then((responseData) => rssParser.parse(responseData))
            .then((rss) => {
              
              //console.log(rss);
              setDetails(rss.items.filter(obj => {
                return obj.enclosures;
              }))    
            }); 
        }
        fetchData();
      }, [details]);
      //console.log(details);








    

    
  const [pod, setPod] = useState([]);
  useEffect(() => {
     function fetchData() {
        const response = fetch(
          "https://anchor.fm/s/722f8e84/podcast/rss"
        )
          .then((response) => response.text())
          .then((responseData) => rssParser.parse(responseData))
          .then((rss) => {
            setPod(rss.itunes)
            //console.log(rss);            
          }); 
      }
      fetchData();
    }, [pod]);
    //console.log(pod);

    const [rss, setRss] = useState([]);
    useEffect(() => {
       function fetchData() {
          const response = fetch(
            "https://anchor.fm/s/722f8e84/podcast/rss"
          )
            .then((response) => response.text())
            .then((responseData) => rssParser.parse(responseData))
            .then((rss) => {
              setRss(rss)
              //console.log(rss);    
            }); 
        }
        fetchData();
      }, [rss]);
      //console.log(rss);

    //const [episodes, setEpisodes] = useState([]);

    //useEffect(() => {
      
      //fetch("https://anchor.fm/s/722f8e84/podcast/rss")
        //  .then(response => response.text())
          //.then(data => {
            //let parser = new DOMParser();
            //let episodes = parser.parseFromString(data, 'text/xml');
                       
            //setEpisodes(episodes);
              
          //})
          //.catch(error=>console.log(error))        
        //},[]);
        //console.log(episodes) 
        
       
  return (
   <div className="episodes">
      
    <div className="episodes__left-section">
    
     <img className="episodes__image" alt= "Un Coin de Ciné" key={pod.image} src={pod.image}/>

     
      <h2 className="episodes__title"  >{rss.title}</h2>
      <p className="episodes__description" key={rss.description}>{rss.description}</p>
      <div className="episodes__social">
        <div className="episodes__logo-facebook"><FaFacebook/></div>
        <div className="episodes__logo-instagram"><FaInstagram/></div>  
      </div>
      
    </div>

    <div className="episodes__right-section">
      <div className="episodes__post">
      
        <div className="episode">
          {feed.map((eps)=>(
          <div className="episode__data">
            <div className="episode__data-header">
            <div className="audioplayer"><FiPlay />
              <button className="audio" src="">PLAY</button>
            </div>
              <div className="episode__post-date">{eps.published}</div>
            </div>
            <div className="episode__post-title" key={eps.id} >{eps.title}</div>
            <div className="episode__post-description">
            <p>{eps.description}</p>
            <img className="episode__image" alt= "72" src="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_episode400/19057193/19057193-1648451904545-7cd757063965.jpg"/>
            </div>
          </div>     
         ))} 
        </div>

                
      </div>
      </div>
      
      </div>
  
  );

}
export default Episodes;