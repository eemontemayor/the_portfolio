import React from "react";
import Split from "../components/Split/Split";
import "./LandingPage.css";
import Carousel from "../components/Carousel/Carousel";
export default class LandingPage extends React.Component {


    state = {
      blurb1: '',
      blurb2: '',
      pairedBlurbs:[]
    }


  
// Landing page on hover.... the oppo side the user is hovering on will reveal the background image underneath
componentDidMount() {// transfer blurb array from props and use circle as a button that will change the quotes on click/hover
  const blurbArray = ['Whimsical Wordsmith', '1 Blah blah blah', '2 blah blah blah', '3 blah blah blah', 'Lover of Tacos', 'Endorphin Enthusiast']
  const pairedBlurbs = this.pairBlurbs(this.shuffleBlurbs(blurbArray))
  this.setState({
    blurb1: pairedBlurbs[0][0],
    blurb2:pairedBlurbs[0][1],
    blurbPairs: pairedBlurbs
  })

}
shuffleBlurbs = (arr) => {
  let blurbArr = arr
  let shuffle = function (array) {

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

 return shuffle(blurbArr) 
}

pairBlurbs = (arr) => {
  const firstArr = ['Critical Thinker For Hire', 'Sentient Bag of StarDust']
  const lastArr= [' blah blha blah bbbla ','Ran out of ideas']
  
  let input = arr 

  let combArr = [
    firstArr,
    [input[0], input[1]],
    [input[2], input[3]],
    [input[4], input[5]],
    // [input[6], input[7]],
    lastArr
  ]
  // console.log(combArr)
  return combArr

}
  
  handleClick = () => {
    // const lastArr= [' blah blha blah bbbla ','Ran out of ideas']
    let arr = this.state.blurbPairs
    let oldBlurbs= arr.shift()
    let newBlurb1 = arr[0][0]
    let newBlurb2 = arr[0][1]
    arr.push([oldBlurbs])
    
  this.setState({
    blurb1: newBlurb1,
    blurb2: newBlurb2,
    blurbPairs:arr
  }, () => {
      console.log(this.state)
  })
  }

 
  render() {
    return (
      <div className="LandingPage">
        <div className='circle-wrapper'>

            <section className="circle" onClick={this.handleClick}>
                <div id='circ-content'>

          <h2><span className='firstName'>Quique</span>  <br/><span className='lastName'>Montemayor</span></h2>
                <h1>Full Stack Developer</h1>
                <Carousel blurb1={this.state.blurb1} blurb2={this.state.blurb2}/>
                </div>
        </section>
        </div>
     
        <Split className="black" ></Split>
        <Split className="white" ></Split>
      </div>
    );
  }
}
