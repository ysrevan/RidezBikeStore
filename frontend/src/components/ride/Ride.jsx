import React from 'react'
import './Ride.css'
import { RxColorWheel } from "react-icons/rx";
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import { LiaBicycleSolid } from "react-icons/lia";

function Ride() {
  return (
    <section id='ride'>
        <div className="ride-text">
            <p className='startride'>YOUR RIDE START HERE</p>
            <h1 className='facilities'>Our Facilities & Features</h1>
        </div>
        <div className="mycontainer">
            <div className="bikeshares">
                <div className="wheelcard">
              <div className="wheeliconbox">
              <RxColorWheel className='wheelicon'/>
              </div>
                <h3 className='overhaul'>Complete Overhaul</h3>
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>

                <div className="helmetcard">
                <div className="helmeticonbox">
                <GiFullMotorcycleHelmet className='helmeticon'/>
                </div>
                <h3 className='accessories'>Custom Parts & Accessories</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
                </div>


                <div className="solidcard">
                    <div className="solidiconbox">
                <LiaBicycleSolid className='solidicon'/>
                    </div>
                <h3 className='delivery'>Bike Fitting & Delivery</h3>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                </div>
            </div>
        </div>
        
     
        
    </section>
  )
}

export default Ride