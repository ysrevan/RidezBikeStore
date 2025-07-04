import React from 'react'
import './Abouthumble.css'
import humbleimg from '../../assets/images/about_03.jpg'
function Abouthumble() {
  return (
    <section id='abouthumble'>
        <div className="mycontainer">
        <div className="humblebox">
            <div className="humbleimagebox">
                <img src={humbleimg} alt="" />
            </div>

            <div className="humbletext">
                <p className='story'>OUR STORY</p>
                <h1 className='humblebeginning'>A Humble Beginning</h1>
                <p className='hill'>It is a beautiful ride through the hills and valleys of the Kettle Moraine region. 
                    I don’t think that I had ever ridden my bike more than ten miles in one crack,
                     and now we were going to ride seventy miles in a single day.
                Humans race for fun, for excitement, for the challenge. 
                Competition is intrinsic to our nature. 
                As long as there have been bicycles there has been bicycle racing.
                 84 years after the first intrepid cyclists battled on that oval of dirt, 
                Trek broke ground on a new headquarters across the street.</p>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Abouthumble