import React from 'react'
import './Aboutpage.css'
import { Link } from 'react-router-dom'
function Blogpage() {
  return (
    <section id='pageheader'>
       <div className="mycontainer">
       <div className="pageheadertext">
        <Link to='/' className='pass'>HOMEPAGE - BLOG</Link>
        <h1 className='aboutname'>Blog</h1>
       </div>
       </div>
    </section>
  )
}

export default Blogpage