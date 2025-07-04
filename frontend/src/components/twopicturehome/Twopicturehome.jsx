import React from 'react'
import './Twopicturehome.css'
import kidsbg from '../../assets/images/h1-banner4.jpg'
import accessoriesbg from '../../assets/images/h1-banner5.jpg'
import Button from '../utils/Button'
function Twopicturehome() {
  return (
    <section>
       <div className="twocards">
        <div className="twocardkids" style={{backgroundImage: `url(${kidsbg})`}}>
           <h1>KIDS BIKES</h1>
           <p>Close-out pricin on dozens of products</p>
           <Button className='twocardkidsbutton'>SHOP NOW</Button>
        </div>
        <div className="twocardaccessories" style={{backgroundImage:`url(${accessoriesbg})`}}>
           <h1>ACCESSORIES</h1>
           <p>Close-out pricin on dozens of products</p>
           <Button className='twocardkidsbutton'>SHOP NOW</Button>
        </div>
       </div>
    </section>
  )
}

export default Twopicturehome