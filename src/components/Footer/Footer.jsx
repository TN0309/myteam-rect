import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import img2 from './img2.png'

function Footer() {
  return (
    <footer>
      <div className='container'>
           <div className='footer-inner'>
          <div className='footer-logo'>
            <a className='logo2' href="/">myteam</a>
       <ul className='footer_item'>
      <li> 
      <Link className='a4' to="/">Home</Link>
      </li>
      <li>
      <Link className='a5' to="/products">About</Link>
      </li>
         </ul>
         
     </div>
     
      </div>
      <h5 className='h4'>987  Hillcrest Lane <br /> Irvine, CA <br /> California 92714 <br /> Call Us : 949-833-7432</h5>
     <div className='img2'>
      <img src={img2} alt="" />
     </div>

     <p>Copyright 2020. All Rights Reserved</p>
      </div>  
     </footer>
  )
}

export default Footer
