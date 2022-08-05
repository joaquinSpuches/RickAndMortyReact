import logo from './rick.svg';
import './App.css';
import {Route,Link, Routes} from 'react-router-dom' 
import NavBar from './components/navBar';
import Contador from './components/contador'
import EpisodeList from './components/episodeList';
import Episodes from './components/episodes';
import Episode from './components/episode';
import Home from './components/home';
import Info from './components/info';
import Fandom from './components/fandom';

function App() {
  return (
    
    <div className="App"> 
    <header className="App-header">
        <NavBar className='NavBar' enlaces= {['Home','Episodes','Fandom','Info']} />
    </header>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Episodes' element={<Episodes/>}/>
          <Route path='/Episodes/:episode' element={<Episode/>}/>
         {/*  <Route path='/Fandom' element={<Fandom/>}/>
          <Route path='/Info' element={<Info/>}/> */}
        </Routes>               
    </div>
  );
}

export default App;
