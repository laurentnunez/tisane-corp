import { useState, useEffect } from "react";
import {AgGridReact} from 'ag-grid-react';

//import { Link } from 'react-router-dom';
// styles
//import { FiPlay } from "react-icons/fi";
import '../episodes.scss';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';

//import AudioPlayer from "./AudioPlayer";


function Episode(props) {

  const [rowData, setRowData] = useState([])

  
  var columnDefs = [
    {
      headerName: 'Retrouvez tous les épisodes',
      field: 'title',
      wrapText: true,
      autoHeight: true,
      flex:2,
      
    },
    
    {
      headerName: 'audio',
      field: 'mp3',
      cellRenderer: ((params)=>`
        <audio controls preload="none"
        style="height:2em; vertical-align:middle;">
        <source src=${params.value} type="audio/mpeg"/>
        </audio>`
        ),
      autoHeight: true
    }
  ];

  useEffect(()=>{

    fetch(props.rssfeed)
              .then(response => response.text())
              .then(str => new window.DOMParser().parseFromString(str, 'text/xml'))
              .then(data => {            
                  const itemList = data.querySelectorAll('item');
          
                  const items=[];
                  itemList.forEach(el => {
                      items.push({
                        title: el.querySelector('title').textContent,
                        mp3: el.querySelector('enclosure').getAttribute('url')
                      });
                  });

                  setRowData(items)
              });

  },[props.rssfeed]);

 
  return (
    
    <div className="ag-theme-alpine-dark"
      style={{height: props.height, width:props.width}}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          suppressRowHoverHighlight={true}
        >

        </AgGridReact>
      </div>












    
  );
}

export default Episode;