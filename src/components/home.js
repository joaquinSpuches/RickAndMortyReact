import logo from '../rick.svg';
import '../App.css';
import {Route,Link, Routes} from 'react-router-dom' 
import Contador from './contador'
import Episodes from './episodes';


function Home() {
    return (
      <div className="App"> 
        <img src={logo} className="App-logo" alt="logo" />
        <Link className="App-link" to="/Episodes" >
          <p>Choose your favorite episode</p>
        </Link>
        

        </div>
  );

}

export default Home;


