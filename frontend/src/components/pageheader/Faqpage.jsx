import React from 'react'
import { Link } from 'react-router-dom'
import "./Aboutpage.css"
function Faqpage() {
  return (
    <section id='pageheader'>
       <div className="mycontainer">
       <div className="pageheadertext">
        <Link to='/' className='pass'>HOMEPAGE - FAQ</Link>
        <h1 className='aboutname'>Faq</h1>
       </div>
       </div>
    </section>
  )
}

export default Faqpage