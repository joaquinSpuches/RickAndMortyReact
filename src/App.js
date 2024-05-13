import logo from './rick.svg';
import './App.css';
import {Route,Link, Routes} from 'react-router-dom' 
import NavBar from './components/navBar';
import Episodes from './components/episodes';
import Episode from './components/episode';
import Home from './components/home';
import Info from './components/info';
import Characters from './components/characters';

function App() {
  return (
    
    <div  className="App"> 
    <header className="App-header">
        <NavBar className='NavBar' enlaces= {['Home','Episodes','Characters']} />
    </header>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Episodes' element={<Episodes/>}/>
          <Route path='/Episodes/:param' element={<Episode/>}/>
          <Route path='/Characters' element={<Characters/>}/>
         
        </Routes>               
    </div>
  );
}

export default App;
