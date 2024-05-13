import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Episode() {
    const [characters, setCharacters] = useState([]);
    const [episodes, setEpisodes] = useState([]);
    const { param } = useParams();

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/episode')
        .then(res => res.json())
        .then(data => {
            setEpisodes(data.results);
        })
        .catch(error => console.log(error));
    }, []);
    
    useEffect(() => {
        
        if (episode) {
            episode.characters.forEach(characterURL => {
                fetch(characterURL)
                .then(res => res.json())
                .then(data => {
                    setCharacters(prevCharacters => [...prevCharacters, data]);
                })
                .catch(error => console.log(error));
            });
        }
    }, [param, episodes]); // si episodes se actualiza con el episodio, se ejecuta el useEffect que nos hace un fetch de cada uno de los personajes del episodio.
    
    const episode = episodes.find(episode => episode.name === param);

    return (
        <div className="flex flex-col items-start mx-8">
            <h1 className="text-4xl text-green-900"> {episode?.name}</h1>
            <div class="flex gap-9">

            <h2 className="text-lg">Air date: {episode?.air_date}</h2>
            <h2 className="text-lg">Episode: {episode?.episode}</h2>
            <h2 className="text-xl">Created: {episode?.created}</h2>
            <h2 className="text-xl">URL: {episode?.url}</h2>
            </div>
            <h2 className="text-xl">Characters:</h2>
            <ul class="w-full flex flex-wrap gap-9">
                {characters.map((character, i) => (
                    <li class="   text-start" key={i}>
                        <img class="rounded-full border-solid border-gray-700 border-2" src={character.image} alt={character.name} />
                        <p class="w-full text-center ">{character.name}</p>
                    </li>
                ))}
            </ul>
       
        </div>
    );
}

export default Episode;
