import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css';

function Header() {
  return (
    <header>
      <div className='container'>
        <div className='header-inner'>
          <div className='header-logo'>
            <a className='logo' href="/">myteam</a>
       <ul className='list_item'>
      <li> 
      <Link className='a1' to="/">Home</Link>
      </li>
      <li>
      <Link className='a2' to="/products">About</Link>
      </li>
      <li>
      <Link className='a3' to="/product">Contact</Link>
       </li>
     </ul>
     </div>
      </div>
      </div>  
        </header>
     
  )
}

export default Header
