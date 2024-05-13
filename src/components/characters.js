import { useEffect, useState } from "react"

export default function Characters() {
    const [url, setUrl] = useState('https://rickandmortyapi.com/api/character');
    useEffect(() => {

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCharacters(data.results);
                setInfo(data.info);
            })
            .catch(error => console.log(error));
    }, []);
    //  Handle click que actualiza la constante characters con la informacion de la url previa y actualiza la constante 
    //  info con la informacion de la url previa pero no funciona si actualizo la pagina ya que los personajes 
    //  que se muestran son los del fetch del useEffect.
    const handleClickPrev = () => {

        if (info.prev) {
            fetch(info.prev)
                .then(res => res.json())
                .then(data => {
                    setCharacters(data.results);
                    setInfo(data.info);
                    setUrl(data.info.prev);
                })
                .catch(error => console.log(error));
        }
    }

    const handleClickNext = () => {
        if (info.next) {
            fetch(info.next)
                .then(res => res.json())
                .then(data => {
                    setCharacters(data.results);
                    setInfo(data.info);
                })
                .catch(error => console.log(error));
        }
    }
    const [characters, setCharacters] = useState([]);
    const [info, setInfo] = useState({});


    console.log(info)

    return (
        <section>


            <h1 class=" text-3xl p-10 ">Characters</h1>
            <div class="flex w-full items-center justify-center align-middle gap-6 p-6">
                <button onClick={handleClickPrev} class="rounded-full border-solid border-2 border-black p-2 " >prev</button>
                <button onClick={handleClickNext} class="rounded-full border-solid border-2 border-black p-2 h-full">next</button>
            </div>
            <ul class="w-full flex flex-wrap justify-center gap-9">
                {characters.map((character, i) => (
                    <li class="   text-start" key={i}>
                        <img class="rounded-full border-solid border-gray-700 border-2" src={character.image} alt={character.name} />
                        <p class="w-full text-center ">{character.name}</p>
                    </li>
                ))}
            </ul>
            <div class="flex w-full items-center justify-center align-middle gap-6 p-6">
                <button onClick={handleClickPrev} class="rounded-full border-solid border-2 border-black p-2 " >prev</button>
                <button onClick={handleClickNext} class="rounded-full border-solid border-2 border-black p-2 h-full">next</button>
            </div>
        </section>
    )
}	