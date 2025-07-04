import React from 'react'
import './Contacttexts.css'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Contacttexts() {
    return (
        <section id='contacttexts'>
            <div className="mycontainer">
                <div className="contacttextsbox">


                    <div className="textcardone">
                        <p className='getknow'>GET TO KNOW US</p>
                        <h1>Have A Project In Mind? Let’s Talk.</h1>
                        <p>Leo duis ut diam quam nulla porttitor massa id. Cursus turpis massa tincidunt dui ut ornare lectus.</p>
                    </div>

                    <div className="textcardtwo">
                        <h3>EMAIL</h3>
                        <p>Support Email:
                            customerservice@100percent.com
                            General Email:
                            info@100percent.com</p>
                            <h3>HEADQUARTERS</h3>
                            <p>9630 Aero Drive San Diego, CA 92123 United States</p>
                    </div>

                    <div className="textcardthree">
                        <h3>CUSTOMER SEVICE HOURS</h3>
                        <p>Open: 8:00 AM – Close: 18:00 PM</p>
                        <p>Saturday – Sunday: Close</p>
                        <h3>FOLLOW:</h3>
                        <div className="socialprofile">
                            <div className="profilebox">
                            <FaFacebookF />
                            </div>

                            <div className="profilebox">
                            <FaInstagram />
                            </div>

                            <div className="profilebox">
                            <FaTwitter />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contacttexts