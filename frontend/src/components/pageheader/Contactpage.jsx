import React from 'react'
import './Aboutpage.css'
import {Link} from 'react-router-dom'
function Contactpage() {
  return (
    <section id='pageheader'>
    <div className="mycontainer">
    <div className="pageheadertext">
     <Link to='/' className='pass'>HOMEPAGE - CONTACT</Link>
     <h1 className='aboutname'>Contact</h1>
    </div>
    </div>
 </section>
  )
}

export default Contactpage