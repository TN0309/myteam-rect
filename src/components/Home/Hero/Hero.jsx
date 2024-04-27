import React from 'react'
import './Hero.css'
import img1 from './img1.png'



function Hero() {
  return (
     <div className='section'>
      <h4>Finding the right people and building high <br /> performing teams can be hard. Most companies <br />aren’t tapping into the abundance of global talent. <br /> We’re about to change that.</h4>
<h1>Find the  <br />   best  talent </h1>
<div className='image'>
  <img src= {img1} alt="" />
  <div className='hr'>
    <hr />
  </div>
</div>
</div>
  )
}

export default Hero
