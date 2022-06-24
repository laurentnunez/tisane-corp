import { useEffect, useState } from 'react';
import * as rssParser from 'react-native-rss-parser';
//import Episode from "./Episode";
// styles
import './episodes.scss';
import { FaFacebook, FaInstagram } from "react-icons/fa";


function Episodes() {
  const [feed, setFeed] = useState([]);

useEffect(()=>{
  async function fetchData() {

    const response = await fetch('https://anchor.fm/s/722f8e84/podcast/rss');
    const responseData = await response.text();
    const rss = await rssParser.parse(responseData);
    console.log(rss.title);
    console.log(rss.description);
    
      }
      fetchData();
      console.log(feed);
    })
  
  return (
   <div className="episodes">
    <div className="episodes__left-section">
     <img className="episodes__image" alt= "Un Coin de Ciné" src="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/19057193/19057193-1648472550842-a7ea2a84d72c6.jpg"/>
     <h2 className="episodes__title">title</h2>
      <p className="episodes__description">description</p>
      <div className="episodes__social">
        <div className="episodes__logo-facebook"><FaFacebook/></div>
        <div className="episodes__logo-instagram"><FaInstagram/></div>
      </div>
    </div>
    <div className="episodes__right-section">
      <div className="episodes__post">
        <div>{feed}</div>
        <div>{setFeed}</div>
      </div>
    </div> 
   </div> 
  );


}
export default Episodes;