import React from 'react'
import './Aboutexperience.css'
import experienceimgone from '../../assets/images/about_1.jpg'
import experienceimgtwo from '../../assets/images/about_02.png'
import Button from '../utils/Button'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Aboutexperience() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);
  return (
    <section>
      <div className="mycontainer">
        <div className="experiencebox">
        <div data-aos="zoom-in">
        <div className="image-wrapper">
            <img src={experienceimgone} alt="" className="experienceimage-one" />
            <img src={experienceimgtwo} alt="" className="experienceimage-two" />
          </div>
        </div>
          
        <div data-aos="fade-left">
        <div className="experiencetext">
            <p className='whoweare'>WHO WE ARE</p>
            <h1 className='bicyclingexperience'>The Best Bicycling Experience</h1>
            <p className='shopabout'>Shop and buy from our huge selection of mountain bike 
                parts and accessories all with free shipping to the US 
                and cheap worldwide shipping.</p>
                <Button className='aboutcontact'>CONTACT US</Button>
          </div>
        </div>

         
        </div>
      </div>
    </section>
  )
}

export default Aboutexperience
