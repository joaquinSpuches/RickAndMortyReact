import React,{Component} from "react";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
class episodeList extends Component {
    constructor(props){
        super(props);
        
    }
   
   
    render (){ 
          
        return (
           
                <ul>
                    {this.props.episodes.map((link,i) =>{ 
                        
                        
                        
                        return (
                            <li  key={link + i}> 
                            <Link to={link}>{link}</Link> </li>
                        )
                        })
                    }
                </ul>
        
        )
    }
}

export default episodeList
