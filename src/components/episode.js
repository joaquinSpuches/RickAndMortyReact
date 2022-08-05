import React,{Component} from "react";
import { useState,useEffect, } from "react";
import { useParams } from "react-router-dom";
import EpisodeList from "./episodeList";
import PropTypes from "prop-types"
/* import '../Episodes.css' */
import '../App.css'

function Episode(){
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
 
    
    let {episode} = useParams()
  
/*     let name = episodes.find(() => name == {episode})  
    console.log(name)  */
    const array1 = episodes
    console.log(array1)

    

// expected output: 12
    
      return(
          <div>
            
            <p> 
                este es el usuario {
                    episode
                }
            </p>

          
          
          </div>
      )
    }

export default Episode