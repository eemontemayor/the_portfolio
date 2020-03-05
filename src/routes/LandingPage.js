import React from "react";
import Split from "../components/Split/Split";
import "./LandingPage.css";
import Carousel from "../components/Carousel/Carousel";
export default class LandingPage extends React.Component {


    state = {
        blurbs : ['Whimsical Wordsmith','1 Blah blah blah','2 blah blah blah']
    }


    componentDidMount() {
        
    }
  render() {
    return (
      <div className="LandingPage">
            <section id="circle">
                <div className='circ-content'>

          <h2><span className='firstName'>Quique</span>  <br/><span className='lastName'>Montemayor</span></h2>
                <h1>Full Stack Developer</h1>
                <Carousel blurbs={this.state.blurbs}/>
                </div>
        </section>
        <Split className="pink" ></Split>
        <Split className="white" ></Split>
      </div>
    );
  }
}
