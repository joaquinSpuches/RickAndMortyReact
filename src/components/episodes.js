import React,{Component} from "react";
import { useState,useEffect,useRef } from "react";
import Episode from "./episode";
import PropTypes from "prop-types"
import {Link,Route} from 'react-router-dom'
/* import '../Episodes.css' */
import '../App.css'

function Episodes(){
    const [episodes, setEpisodes] = useState([]);
  
    
    useEffect(()=>{
    
        fetch('https://rickandmortyapi.com/api/episode')  
            .then(res =>  res.json())
            .then(data =>  {
                setEpisodes(
                    data.results
                )
            })
            .catch(error =>console.log(error))
    
    },[])
    
   
     

    console.log(episodes)
    
      return(
          <div>
            
            <ul> 
                {episodes == false && <p>Cargando...</p>}
                {
                    episodes.map((episodes,i)=>{
                        return( 
                      <li key={i}>
                         
                        <Link to= {episodes.name}>{episodes.name}  </Link>
                      </li>  
                      )     
                    })
                }
            </ul>
          
          
          </div>
      )
    }

export default Episodes

       
            
    