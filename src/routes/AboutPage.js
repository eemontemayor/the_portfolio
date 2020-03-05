import React from 'react'
import './AboutPage.css'
import Split from '../components/Split/Split'
import about from '../images/about.jpg'
export default function AboutPage(props) {
    return (
        <div className='AboutPage'>
            <Split className='black' >
                <section className='img-cont'>

                    <img src={about}  className='about-img'alt='a dastardly handsome dog' />
                </section>
                    </Split>
                    <Split className='white' >
                        
                    </Split>
        </div>
    )
    
}