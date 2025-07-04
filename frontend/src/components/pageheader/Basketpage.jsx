import React from 'react'
import "./Aboutpage.css"
import { Link } from 'react-router-dom'
function Basketpage() {
  return (
    <section id='pageheader'>
       <div className="mycontainer">
       <div className="pageheadertext">
        <Link to='/' className='pass'>HOMEPAGE - BASKET</Link>
        <h1 className='aboutname'>Basket</h1>
       </div>
       </div>
    </section>
  )
}

export default Basketpage