import React from 'react'
import './Hero.css'
import img5 from './img5.png'

function Hero() {
  return (
    <hero>
      <div className='section4'>
        <div className='contact-inner'>
          <h1 className='contact'>Contact</h1>
          <p className='ask'>Ask us about</p>
          <div className='img5'>
            <img src={img5} alt="" />
          </div>

        </div>
        <div className='input'>
  <input type="text" placeholder='Name' /> <br />
  <input type="text" placeholder='Email Adress' /> <br />
  <input type="text" placeholder='Company name' /> <br />
  <input type="text" placeholder='Title' /> <br /> 
  <input type="text" placeholder='Massage' />

</div>
      </div>
    </hero>
  )
}

export default Hero
