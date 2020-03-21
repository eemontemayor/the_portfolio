import React,{Component} from 'react'
import { NavLink } from "react-router-dom";
import ContactLinks from '../ContactLinks/ContactLInks'
import './NavBar.css'
export default class NavBar extends Component {
    state = {
        showingIcons: false
    }

    handleClick = () => {
        this.setState({
        showIcons:!this.state.showingIcons
    })
}

    render() {
    
        return (
            <div className="side-nav">

            <NavLink to={"/CV"}id="cv-link">
              resumé

          
            </NavLink>
           {/* <NavLink to={"/misc"}id="misc-link" >
     
            misc
           
                  
            </NavLink>
            {this.state.showingIcons && <ContactLinks/>} */}
        </div>
        
        )
    }
}