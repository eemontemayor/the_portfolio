import React from 'react'
import './ProjectsPage.css'
import Split from '../components/Split/Split'
import ProjectItem from '../components/ProjectItem/ProjectItem'



export default function ProjectsPage(props) {



    const projArray =[
          
            
        {
            className:'mimood',
            name:'miMood',
            desc:'Track fluctuations in your mood with AI-generated data',
            img:'images/mimood.png',
            git:'https://github.com/thinkful-ei-bee/Altered-States-Capstone',
            live:'https://alt-states-mimood.now.sh/',
            
        },

        {
            className:'spacedRepApp',
            name:'Reps',
            desc:'Learn a language with a spaced repetition algorithm',
            img:'images/spaced-rep-app.png',
            git:'https://github.com/eemontemayor/spaced-rep',
            live:'https://reps.eemontemayor.now.sh/landing',
         

        },
        {
            className:'MealDeal',
            name: 'Meal Deal 2.0',
            desc:'Plan out your meals on a calendar with some added features and enhanced UI',
            img: 'images/MealDeal.jpg',// TO-DO fix the relative path to render image
            git: 'https://github.com/eemontemayor/meal-deal-client',
            live:'https://the-meal-deal.now.sh/',
         
            
        },
        {
            className:'miNotes',
            name:'miNotes',
            desc:'Add, store and organize notes by folders',
            img:'images/miNotes.png',
            git:'https://github.com/eemontemayor/miNotes-client',
            live:'https://quique-minotes.now.sh/',
        },
 
    ]

    function renderProjArray(proj){
        let html = proj.map((item, index)=>{
          
            
            return <li className='proj-item' key={index}><Split>
                
                <ProjectItem className={item.className} 
                            title={item.name} 
                            skills={item.skills} 
                            desc={item.desc} 
                            live={item.live}
                            git={item.git}
                            />
                            </Split>
           
            </li>
        })
        return html

    }   
const projects = renderProjArray(projArray)


    return (
        <div className='ProjectsPage'>
             <h1 className='proj-page-hdr'>Projects</h1>
                <ul className='proj-array'>    
                {projects}
                </ul>
     
        </div>
    )
    
}