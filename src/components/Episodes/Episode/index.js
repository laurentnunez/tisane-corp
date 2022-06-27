// import { useEffect } from "react";
//import {AgGridReact} from 'ag-grid-react';
// suppressRowHoverHighlight={true}
//import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
// styles
import { FiPlay } from "react-icons/fi";
//import * as rssParser from 'react-native-rss-parser';
import '../episodes.scss';


//import AudioPlayer from "./AudioPlayer";

function Episode([title, description]) {
  return ( 
  <div className="episode">
    <div className="audioplayer"><FiPlay /></div>
      <div className="episode__post-title">{title}</div>
        <p className="episode__post-description">{description}</p>
        <img className="episode__image" alt= "72" src="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_episode400/19057193/19057193-1648451904545-7cd757063965.jpg"/>
  </div>
  )    
}

Episode.propTypes = {  
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default Episode;