import React from 'react'
import "./NavList.css"
import {Link} from 'react-router-dom'
function NavList() {
  return (
    <ul className='list'>
       <li><Link to="/">HOME</Link></li>
       <li><Link to="/shop">SHOP</Link></li>
       <li><Link to="/about">ABOUT</Link></li>
       <li><Link to="/blog">BLOG</Link></li>
       <li><Link to="/contact">CONTACT</Link></li>
       <li><Link to="/faq">FAQ</Link></li>
    </ul>
  )
}

export default NavList