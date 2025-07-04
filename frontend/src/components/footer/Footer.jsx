import React from 'react'
import footerbg from '../../assets/images/Footer_BG.jpg'
import "./Footer.css"
import { RiMessage2Line } from "react-icons/ri";
import Button from '../utils/Button';
import { BsTelephoneInbound } from "react-icons/bs";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import cardphoto from "../../assets/images/Bitmap-1.png"
function Footer() {
  return (
    <footer>
      <section id='footer-area' style={{ backgroundImage: `url(${footerbg})`}}>
        <div className="mycontainer">


        <div className="footer-cards">
            <div className="footer-cardone">
            <RiMessage2Line className='message'/>
            <h1 className='help'>NEED HELP?</h1>
            <p>Our dedicated team are here to help.</p>
            <Button className="chat-button">CHAT NOW</Button>
            </div>

            <div className="footer-cardone">
            <BsTelephoneInbound  className='message'/>
            <h1 className='help'>CALL US</h1>
            <p>Talk to our team 24/7 about your needs.</p>
            <h1 className='telephone-number'>666 - 880 - 33388</h1>
            </div>

            <div className="footer-cardone">
            <MdOutlineMarkEmailRead className='message'/>
            <h1 className='help'>SUBSCRIBE US</h1>
            <p>And get the scoop on sales & new gear!</p>
            <input type="text"  placeholder='Enter Email Address' className='footer-input'/>
            </div>
            </div>  

    
          <div className="link-cards">

           <div className="linkcard1">
            <h1>USEFUL LINKS</h1>
            <ul className='footerlinks'>
              <li>Legal & Privacy</li>
              <li>Contact</li>
              <li>Gift Card</li>
              <li>Customer Service</li>
              <li>My Account</li>
              <li>Find A Store</li>
            </ul>
           </div>

           <div className="linkcard1">
            <h1>MY ACCOUNT</h1>
            <ul className='footerlinks'>
              <li>My Profile</li>
              <li>My Order History</li>
              <li>My Wish List</li>
              <li>Order Tracking</li>
              <li>Shopping Cart</li>
            </ul>
           </div>

           <div className="linkcard1">
            <h1>COMPANY</h1>
            <ul className='footerlinks'>
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Affiliate</li>
              <li>Contact Us</li>
            </ul>
           </div>

           <div className="linkcard1">
            <h1>SHOP</h1>
            <ul className='footerlinks'>
              <li>Televisions</li>
              <li>Fridges</li>
              <li>Washing Machines</li>
              <li>Fans</li>
              <li>Air Conditioners</li>
              <li>Laptops</li>
            </ul>
           </div>

           <div className="linkcard1">
            <h1>CONNECT WITH US</h1>
             <div className="footer-icons">
              <div className="icon-div"><FaFacebookF className='footer-icon'/></div>
              <div className="icon-div"><FaTwitter  className='footer-icon'/></div>
              <div className="icon-div"><FaInstagram  className='footer-icon'/></div>
              <div className="icon-div"><FaWhatsapp  className='footer-icon'/></div>
             </div>
             <h1>PAYMENT METHOD</h1>
             <div className="cardphotodiv"><img src={cardphoto} alt="" /></div>
           </div>

          </div>


          <div className="year">
            <p>Copyright © 2025 Ridez. All Rights Reserved.</p>
          </div>

        </div>
      </section>
    </footer>
  )
}

export default Footer