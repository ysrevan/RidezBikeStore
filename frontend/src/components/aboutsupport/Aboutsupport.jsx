import React from 'react'
import './Aboutsupport.css'
import { FaRegUser } from "react-icons/fa";
import { PiBicycle } from "react-icons/pi";
import supportphoto from '../../assets/images/about_4.jpg'
import Button from '../utils/Button';
function Aboutsupport() {
    return (
        <section id='aboutsupport'>
            <div className="supporttext">
                <p className='needsupport'>NEED SUPPORT</p>
                <h1 className='specialservices'>Try Our Special Services</h1>
            </div>
            <div className="mycontainer">
                <div className="supportbox">
                <div className="supportcardone">
                    <FaRegUser className='aboutuser'/>
                    <h1>Customer Service</h1>
                    <p>How to access your order, account, shipping information, and returns and exchanges.</p>
                    <Button className='aboutlearnnmore'>LEARN MORE</Button>
                </div>
                <div className="supportcardtwo">
                    <PiBicycle className='aboutbicycle'/>
                    <h1>Product Support</h1>
                    <p>Learn what bike is right for you, sizing, valuable how-to information, and the resources available.</p>
                    <Button className='aboutlearnnmore'>LEARN MORE</Button>
                </div>

                <div className="supportimage">
                    <img src={supportphoto} alt="" />
                   <div className="supportimagetext">
                    <h1 className='takeoff'>TAKE 20% OFF</h1>
                    <h1 className='onefull'>ONE FULL-PRICE ITEM</h1>
                    <p className='sprint'>Use Code SPRINT20 For Year-End Holiday Shopping</p>
                    <Button className='setdetails'>SET DETAILS</Button>
                   </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Aboutsupport