import React, {useEffect} from "react";
import './Carousel.css'
export default class Carousel extends React.Component{
  state = {
    blurb1:  'Critical Thinker For Hire',
    blurb2: 'Sentient Bag of StarDust',
    pairBlurbs:[]
}


// Landing page on hover.... the oppo side the user is hovering on will reveal the background image underneath
  componentDidMount() {// transfer blurb array from props and use circle as a button that will change the quotes on click/hover
    const blurbArray = ['Whimsical Wordsmith', '1 Blah blah blah', '2 blah blah blah', '3 blah blah blah', 'Lover of Tacos', 'Endorphin Enthusiast']
    const pairedBlurbs = this.pairBlurbs(this.shuffleBlurbs(blurbArray))
    this.setState({
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
    // const firstArr = ['Critical Thinker For Hire', 'Sentient Bag of StarDust']
    const lastArr= [' ','Ran out of ideas']
    
    let input = arr 

    let combArr = [
      // firstArr,
      [input[0], input[1]],
      [input[2], input[3]],
      // [input[4], input[5]],
     
      lastArr
    ]
    // console.log(combArr)
    return combArr
  
  }
  renderBlurbs = (delay=5000) => {

   
    // for (let i = 0; i < finalArr.length; i++){
    //   setTimeout(function () {
     
    //   }, delay);
    //   this.setBlurbs(finalArr[i])
    // }

  //   this.setState({
  //    blurb1:'hey you'
  //   }, () => {
  //     setTimeout(function () {
  //       // this.setState({ blurb1: finalArr[4] })
  //       console.log('aqui')
  //     }, delay)
  //  })

  }

  setBlurbs = (arr) => {
    this.setState({
      blurb1: arr[0],
      blurb2:arr[1]
    }, () => {
        console.log(this.state)
    })
  }

  render() {
   this.renderBlurbs()
    const blurb1 = this.state.blurb1
      // || 'Critical Thinker For Hire'
    const blurb2 = this.state.blurb2
      // || 'Sentient Bag of Startdust'
    return( <>
      <p className='blurb1' >{blurb1} </p>
      <p className='blurb2' >{blurb2} </p>
      
      </>)
    }
  
}
