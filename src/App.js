import React, {Component} from 'react';
import { NavLink, Link, Route } from 'react-router-dom'
import LandingPage from './routes/LandingPage'
import ProjectsPage from './routes/ProjectsPage'
import AboutPage from './routes/AboutPage'
import './App.css'
export default class App extends Component{
  
  
  

  render() {

    return (
      <div className='App'>
        <header className='App__Header'>
          <div className='nav-links'>

        <NavLink to={'/'}
                component={LandingPage}
                className='q-icon'>
              <p>
              Quique
              </p>
                </NavLink>
        
           

          
            <div className='center'>
            
          
          <NavLink to={'/projects'} className='white'>
              <p>
              work
              </p>
            </NavLink>
           
          {/* {'     '} */}
        

        
          <NavLink to={'/about'}  className='black'>
              <p>
                about
            </p>
            </NavLink>
           
            </div>
                </div>
      
         
        </header>
        <main className='App__Main'>
          <Route
            exact
            path='/'
            component = {LandingPage}
          />
            <Route
            path='/about'
            component = {AboutPage}
          />
          <Route
          path='/projects'
          component = {ProjectsPage}
        />
          
       </main>
        <footer>

        </footer>
        </div>
  );
}
}


