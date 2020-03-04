import React from 'react'
import Split from '../components/Split/Split'
import './LandingPage.css'
import LandingCircle from '../components/LandingCircle/LandingCircle'
export default class LandingPage extends React.Component{
    render() {
        return (
            <div className ='LandingPage'>
      
                {/* <section id='circle'>
              <h2> Quique Montemayor</h2>
              <h1>Full Stack Developer</h1>
      </section> */}
    <Split  className='left' flexBasis={2}>
                    
                    </Split>
                    <Split className='right' flexBasis={2}>
                        
                    </Split>
            </div> 
        )
    }
}