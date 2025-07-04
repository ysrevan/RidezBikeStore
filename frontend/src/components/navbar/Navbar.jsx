import React from 'react'
import NavList from '../navlist/NavList'
import Logo from '../logo/Logo'
import Wrapper from '../wrapper/Wrapper'
import "./Navbar.css"
function Navbar() {
  return (
    <div className='mynav'>
        <NavList/>
        <Logo/>
        <Wrapper/>
    </div>
  )
}

export default Navbar