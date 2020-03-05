import React from "react";
import './Carousel.css'
export default class Carousel extends React.Component{
  state = {
    blurb1: '',
    blurb2:'',
}

componentDidMount() {
  const blurbArray=['Whimsical Wordsmith','1 Blah blah blah','2 blah blah blah','3 blah blah blah']
    
}
  shuffleBlurbs = (arr) => {
    
  }
  pairBlurbs = () => {
    
  }
  renderBlurbs = (arr) => {
   

    
  }

  render() {
   
   const blurb1 = this.state.blurb1 || 'Critical Thinker For Hire'
    const blurb2= this.state.blurb2 || 'Sentient Bag of StarDust'
    return( <>
      <p className='blurb1' >{blurb1} </p>
      <p className='blurb2' >{blurb2} </p>
      
      </>)
    }
  
}
