import React from 'react'
import { Link } from 'react-router-dom'

function Checkoutpage() {
  return (
    <section id='pageheader'>
    <div className="mycontainer">
    <div className="pageheadertext">
     <Link to='/' className='pass'>HOMEPAGE - CHECKOUT</Link>
     <h1 className='aboutname'>Checkout</h1>
    </div>
    </div>
 </section>
  )
}

export default Checkoutpage