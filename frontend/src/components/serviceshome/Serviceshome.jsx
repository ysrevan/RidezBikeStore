import React from 'react'
import servicehomeimg from '../../assets/images/h1-bannernew.jpg'
import './Serviceshome.css'
import Button from '../utils/Button'

function Serviceshome() {
  return (
    <section id="servicehome" style={{ backgroundImage: `url(${servicehomeimg})` }}>
       <div className="mycontainer">
       <div className="servicehomebox">
        <p className='ride'>YOUR RIDE START HERE.</p>
        <h1>Bike Services & Repair</h1>

        <div className="twotextone">
         <div className="textone">
         <h2>01. Tunner - up & Builds</h2>
         <p>Vel illum dolore eu feugiat nulla facilisis at vero eros et accu qui blandit</p>
         </div>

         <div className="texttwo">
         <h2>02. Adjust and install</h2>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
         </div>
        </div>

        <div className="twotexttwo">
          <div className="textthree">
          <h2>03.Personal Bike Fit</h2>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
          </div>
          <div className="textfour">
          <h2>04. Free Delivery</h2>
          <p>Vel illum dolore eu feugiat nulla facilisis at vero eros et accu qui blandit</p>
          </div>
        </div>

        <Button className="exploreproducts">EXPLORE PRODUCTS</Button>
      </div>
       </div>
    </section>
  )
}

export default Serviceshome
