import React from 'react'
import './AboutPage.css'
import Split from '../components/Split/Split'
import about from '../images/about.jpg'
export default function AboutPage(props) {
    return (
        <div className='AboutPage'>
            <Split className='black' id='about-mob-img'  >
                <div className='about-img-cont'>

                    <img src={about}  className='about-img'alt='a dastardly handsome dog' />
                </div>
                    </Split>
                    <Split className='white'id='about-mob-txt'  >
                <section className='about-text-container'>
                    <p className='about-text'>
                        I am a full-stack developer based in Austin, Tx. Before enrolling in Thinkful's Engineering Immersion Program this past January, I was teaching philosophy at the university level. Now, I am excited about this new phase in my life and eager to continue building on what I have already learned.
                    </p>
                    <p className='about-text'>
                    I am pleasantly surprised by how much I enjoy solving the puzzles presented in this particular professional paradigm and I am encouraged by the supportive on-line community programmers provide for each other. I look forward to working with a team of fellow programmers and hope I can contribute some good to the world with my new set of skills.
                    </p>
                    <p className='about-text'>
                        My recreational interests include tennis, soccer, and yoga. When I am not working or chasing my endorphin fix-of-the-day, I spend much of my time serenading and/or anthropomorphizing my incredibly spoiled and yappy dogs.
                    </p>
                        </section>
                    </Split>
        </div>
    )
    
}