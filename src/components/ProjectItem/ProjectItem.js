import React,{Component} from 'react';
import './ProjectItem.css'
import gitLink from '../../images/git-link-white.png'
import jsLogo from '../../images/javascript.png'
import psqlLogo from '../../images/psql.png'
import reactLogo from '../../images/react.png'
import nodeLogo from '../../images/node.png'
import cssLogo from '../../images/css.png'

export default class ProjectItem extends Component{
    state={
        mobileFrame:false
    }
    
    
    handleClick = () =>{
        
      
            this.setState( { 
                mobileFrame:!this.state.mobileFrame
            })
    }



    render(){
    const item= this.props
    return(
        <div>
            <button className={item.className} onClick={this.handleClick.bind(this)}>{item.title}</button>
            <div className={!this.state.mobileFrame?` proj-item-img ${item.className}-img`:` proj-item-img ${item.className}-mob`} />
            <div className='proj-icons'>
                <img src={cssLogo}  alt='css logo'/>
                <img src={jsLogo} alt='javascript logo'/>
                <img src={reactLogo} alt='react logo'/>
                <img src={nodeLogo} alt='node.js logo'/>
                <img src={psqlLogo} alt='postgreSQL logo'/>
            </div>
                <section className= 'proj-details'>
                <p>{item.desc}</p>
                <p>{item.skills}</p>
                <div className='proj-links'>
                <a href={item.git}><img className= 'git-link' src={gitLink} alt='gitHub logo'/></a>
                <a className='proj-item-link'href={item.live}>Live Link</a>
                </div>
                </section>
            </div>
    )
}
}