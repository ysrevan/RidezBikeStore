import React from 'react'
import './Newsletter.css'
import letterphotoone from '../../assets/images/h1-banner9.png'
import letterphototwo from '../../assets/images/h1-banner8.png'
import Button from '../utils/Button'

function NewsLetter() {
  return (
    <section
      id="newsletter-section"
      style={{ backgroundImage: `url(${letterphotoone})` }}
    >
     
     <div className="mycontainer">
     <div className="newsletterarea">
     <div className="overlay-image-left">
        <img src={letterphototwo} alt="overlay" />
      </div>


        <div className="righttext">
            <p className='newsletterparagraph'>NEWSLETTER</p>
            <h1 className='newsletterheader'>Subscribe Today and Get 10% Off your Order</h1>
            
     <div className="newsletterinput">
            <input className='newsletteremail' type="text" placeholder='Enter Email Address'/>
            <Button className='subscribebutton'>SUBSCRIBE</Button>
        </div>
        </div>

        
     </div>

     </div>

    </section>
  )
}

export default NewsLetter
