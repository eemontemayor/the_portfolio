"use strict";

import React from "react";
import Split from "../components/Split/Split";
import "./LandingPage.css";
import Carousel from "../components/Carousel/Carousel";
export default class LandingPage extends React.Component {
  state = {
    blurb1: "Critical Thinker For Hire",
    blurb2: "Sentient Bag of StarDust",
    blurbPairs: []
  };

  componentDidMount() {
    const blurbArray = [
      "Whimsical Wordsmith",
      "1 Blah blah blah",
      "2 blah blah blah",
      "Cosmopolitan-Curious",
      "Alliterative Aficionado",
      "Endorphin Enthusiast"
    ];
    const pairedBlurbs = this.pairBlurbs(this.shuffleBlurbs(blurbArray));

    this.setState({
      blurbPairs: pairedBlurbs
    });
  }

  pairBlurbs = arr => {
    const lastBlurbObj = {
      blurb1: "Lover of Wisdom",
      blurb2: "And Tacos"
    };

    let input = arr;

    let result = [
      { blurb1: input[0], blurb2: input[1] },
      { blurb1: input[2], blurb2: input[3] },
      { blurb1: input[4], blurb2: input[5] },
      lastBlurbObj
    ];

    return result;
  };
  shuffleBlurbs = arr => {
    let blurbArr = arr;
    let shuffle = function(array) {
      var currentIndex = array.length;
      var temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    };

    return shuffle(blurbArr);
  };

  handleClick = () => {
    let arr = this.state.blurbPairs;
    let oldBlurbs = {
      blurb1: this.state.blurb1,
      blurb2: this.state.blurb2
    };

    arr.push(oldBlurbs);
    let newBlurbs = arr.shift();

    this.setState({
      blurb1: newBlurbs.blurb1,
      blurb2: newBlurbs.blurb2,
      blurbPairs: arr
    });
  };

  render() {
    let blurb1 = this.state.blurb1;
    let blurb2 = this.state.blurb2;
    return (
      <div className="LandingPage">
        <div className="circle small" onClick={this.handleClick}>
             <section id="circ-content">
          <h2>
            <span className="firstName">Quique</span> <br />
            <span className="lastName">Montemayor</span>
          </h2>
          <h1 className='title'>Full Stack Developer</h1>
          <Carousel blurb1={blurb1} blurb2={blurb2} />
        </section>

        </div>
        <div className="circle medium"></div>
        <div className="circle large" ></div>
   

        <Split className="black"></Split>
        <Split className="white"></Split>
      </div>
    );
  }
}
