import logo from '../rick.svg';
import '../App.css';
import {Link} from 'react-router-dom' 



function Home() {
    return (
      <div class="flex flex-col   items-center"> 
        <img src={logo} class=' animate-iteration-count-infinite w-20 animate-sink' alt="logo" />
        <Link className="App-link" to="/Episodes" >
          <p class="text-blue-700 underline " >Choose your favorite episode</p>
        </Link>
        

        </div>
  );

}

export default Home;


