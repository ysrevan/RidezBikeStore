import React from 'react'
import './Aboutpage.css'
import { Link } from 'react-router-dom'
function Wishlistpage() {
  return (
    <section id='pageheader'>
       <div className="mycontainer">
       <div className="pageheadertext">
        <Link to='/' className='pass'>HOMEPAGE - WISHLIST</Link>
        <h1 className='aboutname'>Wishlist</h1>
       </div>
       </div>
    </section>
  )
}

export default Wishlistpage