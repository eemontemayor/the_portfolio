import React from "react";
import './Carousel.css'
export default function Carousel(props){
  let blurb1 = props.blurb1
  let blurb2 = props.blurb2



    return( <>
      <p className='blurb1' >{blurb1} </p>
      <p className='blurb2' >{blurb2} </p>
 
      </>)
    }
  

