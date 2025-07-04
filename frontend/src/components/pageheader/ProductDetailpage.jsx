import React from 'react'
import { Link } from 'react-router-dom'

function ProductDetailpage() {
  return (
    <section id='pageheader'>
       <div className="mycontainer">
       <div className="pageheadertext">
        <Link to='/' className='pass'>HOMEPAGE - PRODUCTDETAIL</Link>
        <h1 className='aboutname'>Productdetail</h1>
       </div>
       </div>
    </section>
  )
}

export default ProductDetailpage