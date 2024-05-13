import React,{Component} from "react";
import '../App.css';
import {Route,Link} from 'react-router-dom'

class navBar extends Component {



    
    render (){ 
          
    return (
       
            <ul className="enlaces">
                {this.props.enlaces.map((link,i) =>{ 
                    
                    // I dont know why i complicate myself that much, i could just use css hover
                    
                    return (
                        <li  key={link + i}> 
                        <Link  onMouseEnter={function cambiarColor(){ document.querySelectorAll('.enlaces li a')[i].style.color = 'white'}} 
                            onMouseOut={function cambiarColor2(){ document.querySelectorAll('.enlaces li a')[i].style.color = 'black'}} to={link}>{link}</Link> </li>
                    )
                    })
                }
            </ul>
    
    )
}}

export default navBar