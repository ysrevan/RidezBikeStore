import React from 'react'
import contactemailimg from '../../assets/images/contact_img-1.jpg'
import './Contactemail.css'
import Button from '../utils/Button'
function Contactemail() {
  return (
    <section id='contactemail'>
       <div className="mycontainer">
         <div className="contactemailbox">
         <div className="emailbox">
            <div className="emailtext">
                <h1 className='sendmessage'>Send us a Message</h1>
                <p>If you have any questions or need more information, please use the form below to send us a message.</p>
                <input type="text" placeholder='Your Name'/>
                <input type="email" placeholder='Your Email' />
                <textarea name="" id="" placeholder='Your Message'></textarea>
                <Button className='submitbtn'>SUBMIT</Button>
            </div>
            </div>

            <div className="emailimagebox">
                <img src={contactemailimg} alt="" />
            </div>
         </div>
       </div>
    </section>
  )
}

export default Contactemail