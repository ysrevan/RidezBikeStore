import React from 'react'
import { Link } from 'react-router-dom'
import './Aboutpage.css'
function Shoppage() {
  return (
    <section id='pageheader'>
       <div className="mycontainer">
       <div className="pageheadertext">
        <Link to='/' className='pass'>HOMEPAGE - SHOP</Link>
        <h1 className='aboutname'>Shop</h1>
       </div>
       </div>
    </section>
  )
}

export default Shoppage