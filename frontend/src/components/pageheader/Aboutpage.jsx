import React from 'react'
import './Aboutpage.css'
import {Link} from 'react-router-dom'
function Aboutpage() {
  return (
    <section id='pageheader'>
       <div className="mycontainer">
       <div className="pageheadertext">
        <Link to='/' className='pass'>HOMEPAGE - ABOUT US</Link>
        <h1 className='aboutname'>About us</h1>
       </div>
       </div>
    </section>
  )
}

export default Aboutpage