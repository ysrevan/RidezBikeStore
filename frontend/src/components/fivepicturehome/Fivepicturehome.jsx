import React from 'react'
import "./Fivepicturehome.css"
import brandimg1 from "../../assets/images/brand01.svg"
import brandimg2 from "../../assets/images/brand02.svg"
import brandimg3 from "../../assets/images/brand03.svg"
import brandimg4 from "../../assets/images/brand04.svg"
import brandimg5 from "../../assets/images/brand05.svg"
function Fivepicturehome() {
  return (
    <section id='fivepicturehome'>
      <div className="mycontainer">
        <div className="fivepicturecards">
            <div className="brandimgbox">
                <img src={brandimg1} alt="" />
            </div>
            <div className="brandimgbox">
                <img src={brandimg2} alt="" />
            </div>
            <div className="brandimgbox">
                <img src={brandimg3} alt="" />
            </div>
            <div className="brandimgbox">
                <img src={brandimg4} alt="" />
            </div>
            <div className="brandimgbox">
                <img src={brandimg5} alt="" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Fivepicturehome