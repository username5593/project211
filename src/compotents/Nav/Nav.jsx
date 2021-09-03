import React from "react"
import './Nav.css'


const Nav = () => {
    return (
      <div className='nav'>
        <ul className='nav__allItemBox'>
          <li className='nav__item'>Home</li>
          <li className='nav__item'>Message</li>
          <li className='nav__item'>News</li>
          <li className='nav__item'>Music</li>
        </ul>
      </div>
    );
}

export default Nav;