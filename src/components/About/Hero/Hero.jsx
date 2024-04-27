import React from 'react'
import './Hero.css'
import img3 from './img3.png'

function Hero() {
  return (
    <hero>
      <div className='container3'>
        
      <h1 className='about'>About</h1>
      <h6> <hr /> We help companies build dynamic teams made up of top global talent. Using our <br /> network of passionate professionals we drive innovation and deliver incredible <br /> outcomes. Talented, diverse teams shape the best products and experiences. We’ll <br /> bring those teams to you.</h6>

<div className='img3'>
 <img src={img3} alt="" />
</div>


</div>
    </hero>
  )
}

export default Hero
