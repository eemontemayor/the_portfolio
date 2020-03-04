import React, { Component } from "react";
import { NavLink, Link, Route, Switch } from "react-router-dom";
import LandingPage from "./routes/LandingPage";
import ProjectsPage from "./routes/ProjectsPage";
import AboutPage from "./routes/AboutPage";
import Header from './components/Header/Header'
import "./App.css";
export default class App extends Component {
  render() {
    return (
      <div className="App">
       
          <header>
            <Header className = "App__Header"/>
          </header>
     
        <main className="App__Main">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/projects" component={ProjectsPage} />
          </Switch>
        </main>
        <footer></footer>
      </div>
    );
  }
}
