import React,{Component} from "react";
import { useState,useEffect,useRef } from "react";
import Episode from "./episode";
import PropTypes from "prop-types"
import {Link,Route} from 'react-router-dom'
/* import '../Episodes.css' */
import '../App.css'

function Episodes(){
    const [episodes, setEpisodes] = useState([]);
  
     const [url, setUrl] = useState('https://rickandmortyapi.com/api/episode');



    useEffect(()=>{
    
        fetch(url)  
            .then(res =>  res.json())
            .then(data =>  {
                setEpisodes(
                    data.results
                )
                setInfo(data.info)
                
            })
            .catch(error =>console.log(error))
    
    },[])
    const handleClickPrev = () => {

      if (info.prev) {
          fetch(info.prev)
              .then(res => res.json())
              .then(data => {
                  setEpisodes(data.results);
                  setInfo(data.info);
                  if (data.info.prev==null) {
                      setNotActive(!notActive)
                  }
                  
              })
              .catch(error => console.log(error));
      }else{
        setNotActive(!notActive)
      }
  }

  const handleClickNext = () => {
      if (info.next) {
          fetch(info.next)
              .then(res => res.json())
              .then(data => {
                  setEpisodes(data.results);
                  setInfo(data.info);
                  setNotActive(true)
              })
              .catch(error => console.log(error));
      }
  }

  const [info, setInfo] = useState({});

  const [notActive, setNotActive] = useState(false)
   
     

    
      return(
          <div className="flex flex-col items-center" >
            <h1 class=" text-3xl  ">Episodes</h1>
            <ul class="mt-6 lg:w-[30vw]"> 
                {episodes === false && <p>Cargando...</p>}
                {

                    episodes.map((episodes,i)=>{
                      const characters = episodes.characters
                      console.log(characters);
                        return( 
                      <li key={i} class="flex justify-between gap-6">
                         
                        <Link to={episodes.name}  ><p class="text-blue-700 underline">{episodes.name}</p> 
                      </Link>
                    <p>   {episodes.episode}</p>
                      </li>  
                      )     
                    })
                }
            </ul>

            {/* i would have to do the same with next when it comes to end but im so tired for the moment. because know its only working with prev. */}
            <div class="flex w-full items-center justify-center align-middle gap-6 p-6">
                {notActive ?  <button onClick={handleClickPrev} class="rounded-full border-solid border-2 border-black p-2 " >prev</button>
                : null  
              
              }
                <button onClick={handleClickNext} class="rounded-full border-solid border-2 border-black p-2 h-full">next</button>
            </div>
          
          </div>
      )
    }

export default Episodes

       
            
    