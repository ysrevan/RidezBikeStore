import React from 'react'
import './Homenews.css'
import  leftnewsphoto from '../../assets/images/blog07-820x580.jpg'
import rightnewsphoto1 from '../../assets/images/blog01-820x580.jpg' 
import rightnewsphoto2 from '../../assets/images/blog02-820x580.jpg' 
import rightnewsphoto3 from '../../assets/images/blog03-820x580.jpg' 
import rightnewsphoto4 from '../../assets/images/blog05-820x580.jpg' 
function Homenews() {
  return (
    <section id='homenews'>
        <div className="homenewstext">
            <p className='blog'>ON THE BLOG</p>
            <h1 className='latest'>Latest News</h1>
        </div>

        <div className="mycontainer">
        <div className="newsbox">
            <div className="leftnews">
                <div className="leftnewsphotobox">
                    <img src={leftnewsphoto} alt="" />
                    <p>December 16,2021 / By Admin</p>
                    <h1>Introducing: Titan Racing Partners wit...</h1>
                    <p>Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. 
                        Sed eget viverra egestas nisi in consequat. 
                        Fusce sodales augue a accumsan. Cras sollicitudin, ipsum eget blandit...</p>
                </div>
            </div>


            <div className="rightnews">
                <div className="rightnewsone">
                    <div className="rightnewsonetext">
                        <p>December 19,2021 / By Admin</p>
                        <h1>Bicycling Magazine - Drone Comp - ...</h1>
                    </div>
                   <div className="rightnewsphotobox">
                    <img src={rightnewsphoto1} alt="" />
                   </div>
                </div>
                <div className="rightnewstwo">
                <div className="rightnewsonetext">
                        <p>December 17,2021 / By Admin</p>
                        <h1>Introducing The All-New Trance...</h1>
                    </div>
                <div className="rightnewsphotobox">
                    <img src={rightnewsphoto2} alt="" />
                   </div>
                </div>
                <div className="rightnewsthree">
                <div className="rightnewsonetext">
                        <p>December 17,2021 / By Admin</p>
                        <h1>Top Reasons Why An E-Bike Great for...</h1>
                    </div>
                <div className="rightnewsphotobox">
                    <img src={rightnewsphoto3} alt="" />
                   </div>
                </div>
                <div className="rightnewsfour">
                <div className="rightnewsonetext">
                        <p>December 21,2021 / By Admin</p>
                        <h1>Valley Electrical_Titan Racing Team...</h1>
                    </div>
                <div className="rightnewsphotobox">
                    <img src={rightnewsphoto4} alt="" />
                   </div>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Homenews