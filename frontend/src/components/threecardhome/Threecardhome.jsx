import React from 'react'
import './Threecardhome.css'
import threecardonebg from '../../assets/images/h1-banner1.jpg'
import threecardtwobg from '../../assets/images/h1-banner2.jpg'
import threecardthreebg from '../../assets/images/h1-banner3.jpg'
import Button from '../utils/Button'
function Threecardhome() {
  return (
    <section>
        <div className="threecards">
        <div className="threecardone" style={{backgroundImage:`url(${threecardonebg})`}}>
             <div className="cardonetext">
             <h1  className='singletrack'>Singletrack Speed</h1>
             <p>THE ALL-NEW TRANCE ADVANCED PRO 29 SERIES</p>
             <Button className="learn">LEARN MORE</Button>
             </div>
            </div>

            <div className="threecardtwo" style={{backgroundImage:`url(${threecardtwobg})`}}>
           <div className="cardtwotext">
           <h1 className='trail'>Trail Power</h1>
             <p>25% OFF TRANCE X ADVANCE E+</p>
             <Button className="discover">DISCOVER MORE</Button>
           </div>
            </div>

            <div className="threecardthree" style={{backgroundImage:`url(${threecardthreebg})`}}>
           <div className="cardthreetext">
           <h1 className='road'>Road Bikes</h1>
             <p>NEW STYLES JUST GOT IN</p>
             <Button className="shop">SHOP NOW</Button>
           </div>
            </div>
        </div>
    </section>
  )
}

export default Threecardhome